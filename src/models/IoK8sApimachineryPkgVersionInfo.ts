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

import { HttpFile } from "../http/http.ts";

/**
* Info contains versioning information. how we'll want to distribute that information.
*/
export class IoK8sApimachineryPkgVersionInfo {
  "buildDate": string;
  "compiler": string;
  "gitCommit": string;
  "gitTreeState": string;
  "gitVersion": string;
  "goVersion": string;
  "major": string;
  "minor": string;
  "platform": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "buildDate",
      "baseName": "buildDate",
      "type": "string",
      "format": "",
    },
    {
      "name": "compiler",
      "baseName": "compiler",
      "type": "string",
      "format": "",
    },
    {
      "name": "gitCommit",
      "baseName": "gitCommit",
      "type": "string",
      "format": "",
    },
    {
      "name": "gitTreeState",
      "baseName": "gitTreeState",
      "type": "string",
      "format": "",
    },
    {
      "name": "gitVersion",
      "baseName": "gitVersion",
      "type": "string",
      "format": "",
    },
    {
      "name": "goVersion",
      "baseName": "goVersion",
      "type": "string",
      "format": "",
    },
    {
      "name": "major",
      "baseName": "major",
      "type": "string",
      "format": "",
    },
    {
      "name": "minor",
      "baseName": "minor",
      "type": "string",
      "format": "",
    },
    {
      "name": "platform",
      "baseName": "platform",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApimachineryPkgVersionInfo.attributeTypeMap;
  }

  public constructor() {
  }
}