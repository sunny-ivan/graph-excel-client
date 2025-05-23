/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TimePostRequestBody}
 */
// @ts-ignore
export function createTimePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTimePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTimePostRequestBody(timePostRequestBody: Partial<TimePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hour": n => { timePostRequestBody.hour = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "minute": n => { timePostRequestBody.minute = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "second": n => { timePostRequestBody.second = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTimePostRequestBody(writer: SerializationWriter, timePostRequestBody: Partial<TimePostRequestBody> | undefined | null = {}) : void {
    if (timePostRequestBody) {
        writer.writeObjectValue("hour", timePostRequestBody.hour);
        writer.writeObjectValue("minute", timePostRequestBody.minute);
        writer.writeObjectValue("second", timePostRequestBody.second);
        writer.writeAdditionalData(timePostRequestBody.additionalData);
    }
}
export interface TimePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The hour property
     */
    hour?: UntypedNode | null;
    /**
     * The minute property
     */
    minute?: UntypedNode | null;
    /**
     * The second property
     */
    second?: UntypedNode | null;
}
/**
 * Provides operations to call the time method.
 */
export interface TimeRequestBuilder extends BaseRequestBuilder<TimeRequestBuilder> {
    /**
     * Invoke action time
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TimePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action time
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TimePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TimeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/time";
/**
 * Metadata for all the requests in the request builder.
 */
export const TimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: TimeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTimePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
