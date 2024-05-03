/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StandardizePostRequestBody}
 */
export function createStandardizePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStandardizePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoStandardizePostRequestBody(standardizePostRequestBody: Partial<StandardizePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mean": n => { standardizePostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { standardizePostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { standardizePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeStandardizePostRequestBody(writer: SerializationWriter, standardizePostRequestBody: Partial<StandardizePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("mean", standardizePostRequestBody.mean, serializeJson);
    writer.writeObjectValue<Json>("standardDev", standardizePostRequestBody.standardDev, serializeJson);
    writer.writeObjectValue<Json>("x", standardizePostRequestBody.x, serializeJson);
    writer.writeAdditionalData(standardizePostRequestBody.additionalData);
}
export interface StandardizePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mean property
     */
    mean?: Json;
    /**
     * The standardDev property
     */
    standardDev?: Json;
    /**
     * The x property
     */
    x?: Json;
}
/**
 * Provides operations to call the standardize method.
 */
export interface StandardizeRequestBuilder extends BaseRequestBuilder<StandardizeRequestBuilder> {
    /**
     * Invoke action standardize
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: StandardizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action standardize
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: StandardizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const StandardizeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/standardize";
/**
 * Metadata for all the requests in the request builder.
 */
export const StandardizeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: StandardizeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeStandardizePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */