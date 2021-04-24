/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";
import { IoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";
import { HttpFile } from "../http/http.ts";

/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
*/
export class IoK8sApiAutoscalingV2beta2ExternalMetricSource {
  "metric": IoK8sApiAutoscalingV2beta2MetricIdentifier;
  "target": IoK8sApiAutoscalingV2beta2MetricTarget;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "metric",
      "baseName": "metric",
      "type": "IoK8sApiAutoscalingV2beta2MetricIdentifier",
      "format": "",
    },
    {
      "name": "target",
      "baseName": "target",
      "type": "IoK8sApiAutoscalingV2beta2MetricTarget",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApiAutoscalingV2beta2ExternalMetricSource.attributeTypeMap;
  }

  public constructor() {
  }
}