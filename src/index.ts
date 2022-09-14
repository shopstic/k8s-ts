import {
  OpenapiOperationApi,
  OpenapiOperationApiArgType,
  OpenapiOperationApiReturnType,
  readerFromStreamReader,
  readLines,
} from "./deps.ts";
import { definitions, paths as K8sApiPaths } from "./openapi.ts";

type K8sApiKey<Key extends keyof definitions> = Key extends `io.k8s.api.${infer K}` ? K : Key;

export type K8s = {
  [T in keyof definitions as K8sApiKey<T>]: definitions[T];
};

export type { K8sApiPaths };

export type K8sApiGetQuery = {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
};
export type K8sApiPutOrPostQuery = {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
};
export type K8sApiPatchQuery = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string;
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string;
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string;
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean;
};
export type K8sApiDeleteQuery = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string;
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string;
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number;
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean;
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string;
};

export type K8sApiPathNamespace = {
  namespace: string;
};

export type K8sApiPathNameAndNamespace = K8sApiPathNamespace & {
  name: string;
};

export type ExtractCrdApiVersion<T> = T extends {
  apiVersion: infer Version;
} ? Version
  : unknown;

export type ExtractCrdKind<T> = T extends {
  kind: infer Kind;
} ? Kind
  : unknown;

export type DeriveCrdPluralName<T> = T extends {
  kind: infer Kind;
} ? Kind extends string ? `${Lowercase<Kind>}s` : unknown
  : unknown;

export type K8sApiPathsWithCrd<
  Paths,
  Def extends {
    apiVersion: string;
    kind: string;
  },
  PluralName extends string = DeriveCrdPluralName<Def>,
  Version extends string = ExtractCrdApiVersion<Def>,
  Kind extends string = ExtractCrdKind<Def>,
  ListDef = {
    apiVersion: Version;
    kind: `${Kind}List`;
    metadata: {
      continue: string;
      resourceVersion: string;
    };
    items: Def[];
  },
> =
  & Paths
  & {
    [path in `/apis/${Version}/${PluralName}`]: {
      get: {
        parameters: {
          query: K8sApiGetQuery;
        };
        responses: {
          200: {
            schema: ListDef;
          };
          401: unknown;
        };
      };
      post: {
        parameters: {
          path: K8sApiPathNamespace;
          query: K8sApiPutOrPostQuery;
          body: {
            body: Def;
          };
        };
        responses: {
          200: {
            schema: Def;
          };
          201: {
            schema: Def;
          };
          202: {
            schema: Def;
          };
          401: unknown;
        };
      };
    };
  }
  & {
    [path in `/apis/${Version}/namespaces/{namespace}/${PluralName}`]: {
      get: {
        parameters: {
          path: K8sApiPathNamespace;
          query: K8sApiGetQuery;
        };
        responses: {
          200: {
            schema: ListDef;
          };
          401: unknown;
        };
      };
      post: {
        parameters: {
          path: K8sApiPathNamespace;
          query: {
            pretty?: string;
            dryRun?: string;
            fieldManager?: string;
          };
          body: {
            body: Def;
          };
        };
        responses: {
          200: {
            schema: Def;
          };
          201: {
            schema: Def;
          };
          202: {
            schema: Def;
          };
          401: unknown;
        };
      };
    };
  }
  & {
    [path in `/apis/${Version}/namespaces/{namespace}/${PluralName}/{name}`]: {
      get: {
        parameters: {
          path: K8sApiPathNameAndNamespace;
          query: {
            pretty?: string;
          };
        };
        responses: {
          200: {
            schema: Def;
          };
          401: unknown;
        };
      };
      put: {
        parameters: {
          path: K8sApiPathNameAndNamespace;
          query: K8sApiPutOrPostQuery;
          body: {
            body: Def;
          };
        };
        responses: {
          200: {
            schema: Def;
          };
          201: {
            schema: Def;
          };
          401: unknown;
        };
      };
      patch: {
        parameters: {
          path: K8sApiPathNameAndNamespace;
          query: K8sApiPatchQuery;
          body: {
            body: K8s["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"];
          };
        };
        responses: {
          200: {
            schema: Def;
          };
          201: {
            schema: Def;
          };
          401: unknown;
        };
      };
      delete: {
        parameters: {
          path: K8sApiPathNameAndNamespace;
          query: K8sApiDeleteQuery;
          body: {
            body: K8s[
              "io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"
            ];
          };
        };
        responses: {
          /** OK */
          200: {
            schema: K8s["io.k8s.apimachinery.pkg.apis.meta.v1.Status"];
          };
          /** Accepted */
          202: {
            schema: K8s["io.k8s.apimachinery.pkg.apis.meta.v1.Status"];
          };
          /** Unauthorized */
          401: unknown;
        };
      };
    };
  };

export type K8sApiWatchEvent<T> = {
  type: "ADDED" | "MODIFIED" | "DELETED";
  object: T;
};

export type K8sApiExtractListItemType<T> = T extends {
  items: (infer E)[];
} ? E
  : unknown;

export function k8sApiWatch<
  // deno-lint-ignore no-explicit-any
  Func extends OpenapiOperationApi<any>,
  Item extends K8sApiExtractListItemType<OpenapiOperationApiReturnType<Func>>,
  Args extends OpenapiOperationApiArgType<Func>,
>(
  api: Func,
): (
  args: Args & {
    query: {
      watch: true;
    };
  },
  init: RequestInit,
) => AsyncGenerator<K8sApiWatchEvent<Item>> {
  async function* doWatch(args: Args, init: RequestInit) {
    for await (
      const line of readLines(
        readerFromStreamReader(
          (await api.stream(args, init)).data!.getReader(),
        ),
      )
    ) {
      const event: K8sApiWatchEvent<Item> = JSON.parse(line);
      yield event;
    }
  }

  return doWatch;
}
