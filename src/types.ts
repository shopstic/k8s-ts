import type { definitions } from "./openapi.ts";

type K8sApiKey<Key extends keyof definitions> = Key extends `io.k8s.api.${infer K}` ? K : Key;

export type K8s = {
  [T in keyof definitions as K8sApiKey<T>]: definitions[T];
};
