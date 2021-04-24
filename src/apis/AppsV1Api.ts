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

import { IoK8sApiAppsV1ControllerRevision } from "../models/IoK8sApiAppsV1ControllerRevision.ts";
import { IoK8sApiAppsV1ControllerRevisionList } from "../models/IoK8sApiAppsV1ControllerRevisionList.ts";
import { IoK8sApiAppsV1DaemonSet } from "../models/IoK8sApiAppsV1DaemonSet.ts";
import { IoK8sApiAppsV1DaemonSetList } from "../models/IoK8sApiAppsV1DaemonSetList.ts";
import { IoK8sApiAppsV1Deployment } from "../models/IoK8sApiAppsV1Deployment.ts";
import { IoK8sApiAppsV1DeploymentList } from "../models/IoK8sApiAppsV1DeploymentList.ts";
import { IoK8sApiAppsV1ReplicaSet } from "../models/IoK8sApiAppsV1ReplicaSet.ts";
import { IoK8sApiAppsV1ReplicaSetList } from "../models/IoK8sApiAppsV1ReplicaSetList.ts";
import { IoK8sApiAppsV1StatefulSet } from "../models/IoK8sApiAppsV1StatefulSet.ts";
import { IoK8sApiAppsV1StatefulSetList } from "../models/IoK8sApiAppsV1StatefulSetList.ts";
import { IoK8sApiAutoscalingV1Scale } from "../models/IoK8sApiAutoscalingV1Scale.ts";
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from "../models/IoK8sApimachineryPkgApisMetaV1APIResourceList.ts";
import { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from "../models/IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts";
import { IoK8sApimachineryPkgApisMetaV1Status } from "../models/IoK8sApimachineryPkgApisMetaV1Status.ts";
import { IoK8sApimachineryPkgApisMetaV1WatchEvent } from "../models/IoK8sApimachineryPkgApisMetaV1WatchEvent.ts";

/**
 * no description
 */
export class AppsV1ApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * create a ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createAppsV1NamespacedControllerRevision(
    namespace: string,
    body: IoK8sApiAppsV1ControllerRevision,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1ControllerRevision", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createAppsV1NamespacedDaemonSet(
    namespace: string,
    body: IoK8sApiAppsV1DaemonSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/daemonsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1DaemonSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createAppsV1NamespacedDeployment(
    namespace: string,
    body: IoK8sApiAppsV1Deployment,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/deployments"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1Deployment", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createAppsV1NamespacedReplicaSet(
    namespace: string,
    body: IoK8sApiAppsV1ReplicaSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/replicasets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1ReplicaSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * create a StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async createAppsV1NamespacedStatefulSet(
    namespace: string,
    body: IoK8sApiAppsV1StatefulSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling createAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/statefulsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1StatefulSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete collection of ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteAppsV1CollectionNamespacedControllerRevision(
    namespace: string,
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1CollectionNamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete collection of DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteAppsV1CollectionNamespacedDaemonSet(
    namespace: string,
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1CollectionNamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/daemonsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete collection of Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteAppsV1CollectionNamespacedDeployment(
    namespace: string,
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1CollectionNamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/deployments"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete collection of ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteAppsV1CollectionNamespacedReplicaSet(
    namespace: string,
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1CollectionNamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/replicasets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete collection of StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
  public async deleteAppsV1CollectionNamespacedStatefulSet(
    namespace: string,
    pretty?: string,
    _continue?: string,
    dryRun?: string,
    fieldSelector?: string,
    gracePeriodSeconds?: number,
    labelSelector?: string,
    limit?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1CollectionNamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/statefulsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete a ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteAppsV1NamespacedControllerRevision(
    name: string,
    namespace: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete a DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteAppsV1NamespacedDaemonSet(
    name: string,
    namespace: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete a Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteAppsV1NamespacedDeployment(
    name: string,
    namespace: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete a ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteAppsV1NamespacedReplicaSet(
    name: string,
    namespace: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * delete a StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
  public async deleteAppsV1NamespacedStatefulSet(
    name: string,
    namespace: string,
    pretty?: string,
    dryRun?: string,
    gracePeriodSeconds?: number,
    orphanDependents?: boolean,
    propagationPolicy?: string,
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling deleteAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling deleteAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (gracePeriodSeconds !== undefined) {
      requestContext.setQueryParam(
        "gracePeriodSeconds",
        ObjectSerializer.serialize(gracePeriodSeconds, "number", ""),
      );
    }
    if (orphanDependents !== undefined) {
      requestContext.setQueryParam(
        "orphanDependents",
        ObjectSerializer.serialize(orphanDependents, "boolean", ""),
      );
    }
    if (propagationPolicy !== undefined) {
      requestContext.setQueryParam(
        "propagationPolicy",
        ObjectSerializer.serialize(propagationPolicy, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "IoK8sApimachineryPkgApisMetaV1DeleteOptions",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * get available resources
     */
  public async getAppsV1APIResources(
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/";

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

  /**
     * list or watch objects of kind ControllerRevision
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1ControllerRevisionForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/controllerrevisions";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind DaemonSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1DaemonSetForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/daemonsets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind Deployment
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1DeploymentForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/deployments";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1NamespacedControllerRevision(
    namespace: string,
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling listAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1NamespacedDaemonSet(
    namespace: string,
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling listAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/daemonsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1NamespacedDeployment(
    namespace: string,
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling listAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/deployments"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1NamespacedReplicaSet(
    namespace: string,
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling listAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/replicasets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1NamespacedStatefulSet(
    namespace: string,
    pretty?: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling listAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/namespaces/{namespace}/statefulsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind ReplicaSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1ReplicaSetForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/replicasets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * list or watch objects of kind StatefulSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async listAppsV1StatefulSetForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/statefulsets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * partially update the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedControllerRevision(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedDaemonSet(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedDaemonSetStatus(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedDeployment(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedDeploymentScale(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedDeploymentScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedDeploymentScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedDeploymentScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedDeploymentStatus(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedDeploymentStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedDeploymentStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedDeploymentStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedReplicaSet(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedReplicaSetScale(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedReplicaSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedReplicaSetScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedReplicaSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedReplicaSetStatus(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedStatefulSet(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedStatefulSetScale(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedStatefulSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedStatefulSetScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedStatefulSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * partially update status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
  public async patchAppsV1NamespacedStatefulSetStatus(
    name: string,
    namespace: string,
    body: any,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    force?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling patchAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling patchAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling patchAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json-patch+json",

      "application/merge-patch+json",

      "application/strategic-merge-patch+json",

      "application/apply-patch+yaml",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * read the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedControllerRevision(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedDaemonSet(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedDaemonSetStatus(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedDeployment(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedDeploymentScale(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedDeploymentScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedDeploymentScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedDeploymentStatus(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedDeploymentStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedDeploymentStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedReplicaSet(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedReplicaSetScale(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedReplicaSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedReplicaSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedReplicaSetStatus(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedStatefulSet(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedStatefulSetScale(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedStatefulSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedStatefulSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * read status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
  public async readAppsV1NamespacedStatefulSetStatus(
    name: string,
    namespace: string,
    pretty?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling readAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling readAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }

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

  /**
     * replace the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedControllerRevision(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1ControllerRevision,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1ControllerRevision", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedDaemonSet(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1DaemonSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1DaemonSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedDaemonSetStatus(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1DaemonSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedDaemonSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1DaemonSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedDeployment(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1Deployment,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1Deployment", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedDeploymentScale(
    name: string,
    namespace: string,
    body: IoK8sApiAutoscalingV1Scale,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedDeploymentScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedDeploymentScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedDeploymentScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAutoscalingV1Scale", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedDeploymentStatus(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1Deployment,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedDeploymentStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedDeploymentStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedDeploymentStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1Deployment", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedReplicaSet(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1ReplicaSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1ReplicaSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedReplicaSetScale(
    name: string,
    namespace: string,
    body: IoK8sApiAutoscalingV1Scale,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedReplicaSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedReplicaSetScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedReplicaSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAutoscalingV1Scale", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedReplicaSetStatus(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1ReplicaSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedReplicaSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1ReplicaSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedStatefulSet(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1StatefulSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1StatefulSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedStatefulSetScale(
    name: string,
    namespace: string,
    body: IoK8sApiAutoscalingV1Scale,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedStatefulSetScale.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedStatefulSetScale.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedStatefulSetScale.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAutoscalingV1Scale", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * replace status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
  public async replaceAppsV1NamespacedStatefulSetStatus(
    name: string,
    namespace: string,
    body: IoK8sApiAppsV1StatefulSet,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling replaceAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling replaceAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling replaceAppsV1NamespacedStatefulSetStatus.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dryRun",
        ObjectSerializer.serialize(dryRun, "string", ""),
      );
    }
    if (fieldManager !== undefined) {
      requestContext.setQueryParam(
        "fieldManager",
        ObjectSerializer.serialize(fieldManager, "string", ""),
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IoK8sApiAppsV1StatefulSet", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["BearerToken"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
     * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1ControllerRevisionListForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/controllerrevisions";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1DaemonSetListForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/daemonsets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1DeploymentListForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/deployments";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedControllerRevision(
    name: string,
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchAppsV1NamespacedControllerRevision.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedControllerRevision.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedControllerRevisionList(
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedControllerRevisionList.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedDaemonSet(
    name: string,
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchAppsV1NamespacedDaemonSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedDaemonSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedDaemonSetList(
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedDaemonSetList.",
      );
    }

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets"
      .replace("{" + "namespace" + "}", encodeURIComponent(String(namespace)));

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedDeployment(
    name: string,
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchAppsV1NamespacedDeployment.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedDeployment.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedDeploymentList(
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedDeploymentList.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/deployments"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedReplicaSet(
    name: string,
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchAppsV1NamespacedReplicaSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedReplicaSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedReplicaSetList(
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedReplicaSetList.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/replicasets"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedStatefulSet(
    name: string,
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError(
        "Required parameter name was null or undefined when calling watchAppsV1NamespacedStatefulSet.",
      );
    }

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedStatefulSet.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}"
        .replace("{" + "name" + "}", encodeURIComponent(String(name)))
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param namespace object name and auth scope, such as for teams and projects
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1NamespacedStatefulSetList(
    namespace: string,
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // verify required parameter 'namespace' is not null or undefined
    if (namespace === null || namespace === undefined) {
      throw new RequiredError(
        "Required parameter namespace was null or undefined when calling watchAppsV1NamespacedStatefulSetList.",
      );
    }

    // Path Params
    const localVarPath =
      "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets"
        .replace(
          "{" + "namespace" + "}",
          encodeURIComponent(String(namespace)),
        );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1ReplicaSetListForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/replicasets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

  /**
     * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
  public async watchAppsV1StatefulSetListForAllNamespaces(
    allowWatchBookmarks?: boolean,
    _continue?: string,
    fieldSelector?: string,
    labelSelector?: string,
    limit?: number,
    pretty?: string,
    resourceVersion?: string,
    resourceVersionMatch?: string,
    timeoutSeconds?: number,
    watch?: boolean,
    options?: Configuration,
  ): Promise<RequestContext> {
    let config = options || this.configuration;

    // Path Params
    const localVarPath = "/apis/apps/v1/watch/statefulsets";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (allowWatchBookmarks !== undefined) {
      requestContext.setQueryParam(
        "allowWatchBookmarks",
        ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""),
      );
    }
    if (_continue !== undefined) {
      requestContext.setQueryParam(
        "continue",
        ObjectSerializer.serialize(_continue, "string", ""),
      );
    }
    if (fieldSelector !== undefined) {
      requestContext.setQueryParam(
        "fieldSelector",
        ObjectSerializer.serialize(fieldSelector, "string", ""),
      );
    }
    if (labelSelector !== undefined) {
      requestContext.setQueryParam(
        "labelSelector",
        ObjectSerializer.serialize(labelSelector, "string", ""),
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }
    if (pretty !== undefined) {
      requestContext.setQueryParam(
        "pretty",
        ObjectSerializer.serialize(pretty, "string", ""),
      );
    }
    if (resourceVersion !== undefined) {
      requestContext.setQueryParam(
        "resourceVersion",
        ObjectSerializer.serialize(resourceVersion, "string", ""),
      );
    }
    if (resourceVersionMatch !== undefined) {
      requestContext.setQueryParam(
        "resourceVersionMatch",
        ObjectSerializer.serialize(resourceVersionMatch, "string", ""),
      );
    }
    if (timeoutSeconds !== undefined) {
      requestContext.setQueryParam(
        "timeoutSeconds",
        ObjectSerializer.serialize(timeoutSeconds, "number", ""),
      );
    }
    if (watch !== undefined) {
      requestContext.setQueryParam(
        "watch",
        ObjectSerializer.serialize(watch, "boolean", ""),
      );
    }

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

export class AppsV1ApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async createAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1CollectionNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1CollectionNamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1CollectionNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1CollectionNamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1CollectionNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1CollectionNamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1CollectionNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1CollectionNamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1CollectionNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1CollectionNamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async deleteAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1Status = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1Status",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1Status;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppsV1APIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async getAppsV1APIResources(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1APIResourceList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1APIResourceList",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1APIResourceList =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1APIResourceList",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1APIResourceList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1ControllerRevisionForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1ControllerRevisionForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevisionList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevisionList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevisionList",
          "",
        ) as IoK8sApiAppsV1ControllerRevisionList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevisionList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevisionList",
          "",
        ) as IoK8sApiAppsV1ControllerRevisionList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1DaemonSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1DaemonSetForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSetList",
        "",
      ) as IoK8sApiAppsV1DaemonSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSetList",
        "",
      ) as IoK8sApiAppsV1DaemonSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1DeploymentForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1DeploymentForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DeploymentList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DeploymentList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DeploymentList",
        "",
      ) as IoK8sApiAppsV1DeploymentList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DeploymentList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DeploymentList",
        "",
      ) as IoK8sApiAppsV1DeploymentList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevisionList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevisionList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevisionList",
          "",
        ) as IoK8sApiAppsV1ControllerRevisionList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevisionList = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevisionList",
          "",
        ) as IoK8sApiAppsV1ControllerRevisionList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSetList",
        "",
      ) as IoK8sApiAppsV1DaemonSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSetList",
        "",
      ) as IoK8sApiAppsV1DaemonSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DeploymentList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DeploymentList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DeploymentList",
        "",
      ) as IoK8sApiAppsV1DeploymentList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DeploymentList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DeploymentList",
        "",
      ) as IoK8sApiAppsV1DeploymentList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSetList",
        "",
      ) as IoK8sApiAppsV1ReplicaSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSetList",
        "",
      ) as IoK8sApiAppsV1ReplicaSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSetList",
        "",
      ) as IoK8sApiAppsV1StatefulSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSetList",
        "",
      ) as IoK8sApiAppsV1StatefulSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1ReplicaSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1ReplicaSetForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSetList",
        "",
      ) as IoK8sApiAppsV1ReplicaSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSetList",
        "",
      ) as IoK8sApiAppsV1ReplicaSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppsV1StatefulSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async listAppsV1StatefulSetForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSetList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSetList",
        "",
      ) as IoK8sApiAppsV1StatefulSetList;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSetList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSetList",
        "",
      ) as IoK8sApiAppsV1StatefulSetList;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedDaemonSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedDeploymentScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedDeploymentStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedReplicaSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedReplicaSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedStatefulSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchAppsV1NamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async patchAppsV1NamespacedStatefulSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedDaemonSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedDeploymentScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedDeploymentStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedReplicaSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedReplicaSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedStatefulSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readAppsV1NamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async readAppsV1NamespacedStatefulSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ControllerRevision = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApiAppsV1ControllerRevision",
          "",
        ) as IoK8sApiAppsV1ControllerRevision;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedDaemonSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1DaemonSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1DaemonSet",
        "",
      ) as IoK8sApiAppsV1DaemonSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedDeploymentScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedDeploymentStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1Deployment = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1Deployment",
        "",
      ) as IoK8sApiAppsV1Deployment;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedReplicaSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedReplicaSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1ReplicaSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1ReplicaSet",
        "",
      ) as IoK8sApiAppsV1ReplicaSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedStatefulSetScale(
    response: ResponseContext,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAutoscalingV1Scale = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAutoscalingV1Scale",
        "",
      ) as IoK8sApiAutoscalingV1Scale;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAppsV1NamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async replaceAppsV1NamespacedStatefulSetStatus(
    response: ResponseContext,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApiAppsV1StatefulSet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoK8sApiAppsV1StatefulSet",
        "",
      ) as IoK8sApiAppsV1StatefulSet;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1ControllerRevisionListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1ControllerRevisionListForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1DaemonSetListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1DaemonSetListForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1DeploymentListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1DeploymentListForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedControllerRevision(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedControllerRevisionList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedControllerRevisionList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedDaemonSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedDaemonSetList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedDaemonSetList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedDeployment(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedDeploymentList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedDeploymentList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedReplicaSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedReplicaSetList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedReplicaSetList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedStatefulSet(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1NamespacedStatefulSetList
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1NamespacedStatefulSetList(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1ReplicaSetListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1ReplicaSetListForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchAppsV1StatefulSetListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
  public async watchAppsV1StatefulSetListForAllNamespaces(
    response: ResponseContext,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IoK8sApimachineryPkgApisMetaV1WatchEvent = ObjectSerializer
        .deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "IoK8sApimachineryPkgApisMetaV1WatchEvent",
          "",
        ) as IoK8sApimachineryPkgApisMetaV1WatchEvent;
      return body;
    }

    let body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}
