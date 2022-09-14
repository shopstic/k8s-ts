import { K8s, K8sApiPaths, K8sApiPathsWithCrd, k8sApiWatch } from "k8s-fetch";
import { default as immerProduce } from "immer";
import { Fetcher } from "openapi-ts-fetch";

type AutoscaledJob = {
  apiVersion: "shopstic.com/v1";
  kind: "AutoscaledJob";
  metadata: {
    name: string;
    namespace: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: {
    autoscaling?: {
      query: string;
      intervalSeconds: number;
      metricServerUrl: string;
    };
    persistentVolumes?: Array<{
      volumeName: string;
      claimSelector: Record<string, string>;
    }>;
    jobTemplate: K8s["io.k8s.api.batch.v1.Job"];
  };
};

type Paths = K8sApiPathsWithCrd<K8sApiPaths, AutoscaledJob, "autoscaledjobs">;

const fetcher = Fetcher.for<Paths>().configure({
  baseUrl: "http://localhost:8001",
});

const testJob: AutoscaledJob = {
  apiVersion: "shopstic.com/v1",
  kind: "AutoscaledJob",
  metadata: {
    name: "foobar",
    namespace: "cicd",
    labels: {
      "is-foobar": "ya",
    },
    annotations: {
      "good-foobar": "oh-ya",
    },
  },
  spec: {
    autoscaling: {
      query: "sum(foobar{})",
      metricServerUrl: "http://foo.bar/metrics",
      intervalSeconds: 5,
    },
    persistentVolumes: [
      {
        claimSelector: {
          "one.two": "three",
        },
        volumeName: "sticky",
      },
    ],
    jobTemplate: {
      metadata: {
        name: "wacky-job",
      },
      spec: {
        template: {
          spec: {
            containers: [
              {
                name: "pi",
                image: "perl:5.34.0",
                command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"],
              },
            ],
            restartPolicy: "Never",
          },
        },
        backoffLimit: 4,
      },
    },
  },
};

const watchAbortController = new AbortController();

(async () => {
  try {
    console.log("watch cicd autoscaledjobs");
    const events = k8sApiWatch(
      fetcher
        .endpoint("/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs")
        .method("get")
    )(
      {
        path: {
          namespace: "cicd",
        },
        query: {
          watch: true,
          timeoutSeconds: 10,
        },
      },
      {
        signal: watchAbortController.signal,
      }
    );

    for await (const event of events) {
      const job = event.object;
      console.log(
        `WATCH EVENT ${event.type}------------------------------------------------------------------------------`
      );
      console.log(
        "Got job",
        job.metadata.name,
        "with template",
        job.spec.jobTemplate
      );
      console.log(
        "------------------------------------------------------------------------------"
      );
    }
  } catch (e) {
    if (e instanceof DOMException && e.name === "AbortError") {
      console.log("Watch aborted successfully");
    } else {
      throw e;
    }
  }
})();

const maybeExistingTestJob = await (async () => {
  try {
    console.log(
      `get testJob namespace=${testJob.metadata.namespace} name=${testJob.metadata.name}`
    );
    return (
      await fetcher
        .endpoint(
          "/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs/{name}"
        )
        .method("get")({
        path: {
          name: testJob.metadata.name,
          namespace: testJob.metadata.namespace,
        },
        query: {},
      })
    ).data;
  } catch (e) {
    console.log("get testJob failed", JSON.stringify(e));
    return null;
  }
})();

if (maybeExistingTestJob) {
  console.log(`found testJob, going to delete`, maybeExistingTestJob);
  const deleted = (
    await fetcher
      .endpoint(
        "/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs/{name}"
      )
      .method("delete")({
      path: {
        name: maybeExistingTestJob.metadata.name,
        namespace: maybeExistingTestJob.metadata.namespace,
      },
      query: {},
      body: {},
    })
  ).data;
  console.log(`deleted testJob`, deleted);
}

try {
  const created = (
    await fetcher
      .endpoint("/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs")
      .method("post")({
      path: {
        namespace: testJob.metadata.namespace,
      },
      query: {},
      body: testJob,
    })
  ).data;

  console.log("create testJob", created);
  console.log(
    "update testJob",
    (
      await fetcher
        .endpoint(
          "/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs/{name}"
        )
        .method("put")({
        path: {
          name: testJob.metadata.name,
          namespace: testJob.metadata.namespace,
        },
        query: {},
        body: immerProduce(created, (draft) => {
          draft.spec.jobTemplate.spec!.activeDeadlineSeconds = 999;
        }),
      })
    ).data
  );

  console.log(
    "patch testJob",
    (
      await fetcher
        .endpoint(
          "/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs/{name}"
        )
        .method("patch")(
        {
          path: {
            name: testJob.metadata.name,
            namespace: testJob.metadata.namespace,
          },
          query: {},
          body: {
            spec: {
              autoscaling: {
                intervalSeconds: 60,
              },
              persistentVolumes: null,
              jobTemplate: {
                metadata: {
                  name: "some-other-job",
                },
                spec: {
                  backoffLimit: 9001,
                },
              },
            },
          },
        },
        {
          headers: {
            "content-type": "application/merge-patch+json",
          },
        }
      )
    ).data
  );
} catch (e) {
  console.error(JSON.stringify(e));
}

console.log(
  "list all autoscaledjobs",
  (
    await fetcher
      .endpoint("/apis/shopstic.com/v1/autoscaledjobs")
      .method("get")({
      query: {},
    })
  ).data
);

const deleted = (
  await fetcher
    .endpoint(
      "/apis/shopstic.com/v1/namespaces/{namespace}/autoscaledjobs/{name}"
    )
    .method("delete")({
    path: {
      name: testJob.metadata.name,
      namespace: testJob.metadata.namespace,
    },
    query: {},
    body: {},
  })
).data;
console.log(`deleted testJob`, deleted);

watchAbortController.abort();
