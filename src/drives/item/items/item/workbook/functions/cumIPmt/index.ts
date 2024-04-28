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
 * @returns {CumIPmtPostRequestBody}
 */
export function createCumIPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCumIPmtPostRequestBody;
}
export interface CumIPmtPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endPeriod property
     */
    endPeriod?: Json;
    /**
     * The nper property
     */
    nper?: Json;
    /**
     * The pv property
     */
    pv?: Json;
    /**
     * The rate property
     */
    rate?: Json;
    /**
     * The startPeriod property
     */
    startPeriod?: Json;
    /**
     * The type property
     */
    type?: Json;
}
/**
 * Provides operations to call the cumIPmt method.
 */
export interface CumIPmtRequestBuilder extends BaseRequestBuilder<CumIPmtRequestBuilder> {
    /**
     * Invoke action cumIPmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CumIPmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action cumIPmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CumIPmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoCumIPmtPostRequestBody(cumIPmtPostRequestBody: Partial<CumIPmtPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endPeriod": n => { cumIPmtPostRequestBody.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { cumIPmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { cumIPmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { cumIPmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startPeriod": n => { cumIPmtPostRequestBody.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { cumIPmtPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCumIPmtPostRequestBody(writer: SerializationWriter, cumIPmtPostRequestBody: Partial<CumIPmtPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("endPeriod", cumIPmtPostRequestBody.endPeriod, serializeJson);
    writer.writeObjectValue<Json>("nper", cumIPmtPostRequestBody.nper, serializeJson);
    writer.writeObjectValue<Json>("pv", cumIPmtPostRequestBody.pv, serializeJson);
    writer.writeObjectValue<Json>("rate", cumIPmtPostRequestBody.rate, serializeJson);
    writer.writeObjectValue<Json>("startPeriod", cumIPmtPostRequestBody.startPeriod, serializeJson);
    writer.writeObjectValue<Json>("type", cumIPmtPostRequestBody.type, serializeJson);
    writer.writeAdditionalData(cumIPmtPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CumIPmtRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/cumIPmt";
/**
 * Metadata for all the requests in the request builder.
 */
export const CumIPmtRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CumIPmtRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCumIPmtPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */