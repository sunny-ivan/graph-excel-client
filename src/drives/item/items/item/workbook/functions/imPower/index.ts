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
 * @returns {ImPowerPostRequestBody}
 */
export function createImPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImPowerPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoImPowerPostRequestBody(imPowerPostRequestBody: Partial<ImPowerPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imPowerPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { imPowerPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface ImPowerPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The inumber property
     */
    inumber?: Json;
    /**
     * The number property
     */
    number?: Json;
}
/**
 * Provides operations to call the imPower method.
 */
export interface ImPowerRequestBuilder extends BaseRequestBuilder<ImPowerRequestBuilder> {
    /**
     * Invoke action imPower
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImPowerPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action imPower
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImPowerPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeImPowerPostRequestBody(writer: SerializationWriter, imPowerPostRequestBody: Partial<ImPowerPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("inumber", imPowerPostRequestBody.inumber, serializeJson);
    writer.writeObjectValue<Json>("number", imPowerPostRequestBody.number, serializeJson);
    writer.writeAdditionalData(imPowerPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImPowerRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/imPower";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImPowerRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ImPowerRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImPowerPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */