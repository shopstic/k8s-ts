// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi.ts";
import { Configuration } from "../configuration.ts";
import {
  HttpFile,
  HttpMethod,
  RequestContext,
  ResponseContext,
} from "../http/http.ts";
import { ObjectSerializer } from "../models/ObjectSerializer.ts";
import { ApiException } from "./exception.ts";
import { isCodeInRange } from "../util.ts";

import { IoK8sApimachineryPkgVersionInfo } from "../models/IoK8sApimachineryPkgVersionInfo.ts";

/**
 * no description
 */
export class VersionApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * get the code version
     */
  public async getCodeVersion(
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/version/";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class VersionApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCodeVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async getCodeVersion(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgVersionInfo> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgVersionInfo = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgVersionInfo",
          "",
        ) as IoK8sApimachineryPkgVersionInfo;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgVersionInfo = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgVersionInfo",
          "",
        ) as IoK8sApimachineryPkgVersionInfo;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}
