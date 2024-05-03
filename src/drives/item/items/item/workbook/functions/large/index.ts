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
 * @returns {LargePostRequestBody}
 */
export function createLargePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoLargePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoLargePostRequestBody(largePostRequestBody: Partial<LargePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { largePostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "k": n => { largePostRequestBody.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface LargePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The array property
     */
    array?: Json;
    /**
     * The k property
     */
    k?: Json;
}
/**
 * Provides operations to call the large method.
 */
export interface LargeRequestBuilder extends BaseRequestBuilder<LargeRequestBuilder> {
    /**
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: LargePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: LargePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeLargePostRequestBody(writer: SerializationWriter, largePostRequestBody: Partial<LargePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("array", largePostRequestBody.array, serializeJson);
    writer.writeObjectValue<Json>("k", largePostRequestBody.k, serializeJson);
    writer.writeAdditionalData(largePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const LargeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/large";
/**
 * Metadata for all the requests in the request builder.
 */
export const LargeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: LargeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLargePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */