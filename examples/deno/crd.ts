import { K8s, K8sApiPaths, K8sApiPathsWithCrd } from "../../src/index.ts";

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
    jobTemplate: K8s["batch.v1.Job"];
  };
};

export type Paths = K8sApiPathsWithCrd<
  K8sApiPaths,
  AutoscaledJob
>;
