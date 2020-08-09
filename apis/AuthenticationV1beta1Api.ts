// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { IoK8sApiAuthenticationV1beta1TokenReview } from '../models/IoK8sApiAuthenticationV1beta1TokenReview.ts';
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from '../models/IoK8sApimachineryPkgApisMetaV1APIResourceList.ts';

/**
 * no description
 */
export class AuthenticationV1beta1ApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * create a TokenReview
     * @param body 
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public async createAuthenticationV1beta1TokenReview(body: IoK8sApiAuthenticationV1beta1TokenReview, dryRun?: string, fieldManager?: string, pretty?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createAuthenticationV1beta1TokenReview.');
        }

		
		
		
		
		// Path Params
    	const localVarPath = '/apis/authentication.k8s.io/v1beta1/tokenreviews';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dryRun !== undefined) {
        	requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }
        if (fieldManager !== undefined) {
        	requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }
        if (pretty !== undefined) {
        	requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoK8sApiAuthenticationV1beta1TokenReview", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["BearerToken"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get available resources
     */
    public async getAuthenticationV1beta1APIResources(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/apis/authentication.k8s.io/v1beta1/';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["BearerToken"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class AuthenticationV1beta1ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthenticationV1beta1TokenReview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAuthenticationV1beta1TokenReview(response: ResponseContext): Promise<IoK8sApiAuthenticationV1beta1TokenReview > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoK8sApiAuthenticationV1beta1TokenReview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApiAuthenticationV1beta1TokenReview", ""
            ) as IoK8sApiAuthenticationV1beta1TokenReview;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: IoK8sApiAuthenticationV1beta1TokenReview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApiAuthenticationV1beta1TokenReview", ""
            ) as IoK8sApiAuthenticationV1beta1TokenReview;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: IoK8sApiAuthenticationV1beta1TokenReview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApiAuthenticationV1beta1TokenReview", ""
            ) as IoK8sApiAuthenticationV1beta1TokenReview;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoK8sApiAuthenticationV1beta1TokenReview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApiAuthenticationV1beta1TokenReview", ""
            ) as IoK8sApiAuthenticationV1beta1TokenReview;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticationV1beta1APIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuthenticationV1beta1APIResources(response: ResponseContext): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoK8sApimachineryPkgApisMetaV1APIResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApimachineryPkgApisMetaV1APIResourceList", ""
            ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoK8sApimachineryPkgApisMetaV1APIResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoK8sApimachineryPkgApisMetaV1APIResourceList", ""
            ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
