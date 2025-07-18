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
 * @returns {SecondPostRequestBody}
 */
// @ts-ignore
export function createSecondPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSecondPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SecondPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSecondPostRequestBody(secondPostRequestBody: Partial<SecondPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { secondPostRequestBody.serialNumber = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface SecondPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The serialNumber property
     */
    serialNumber?: UntypedNode | null;
}
/**
 * Provides operations to call the second method.
 */
export interface SecondRequestBuilder extends BaseRequestBuilder<SecondRequestBuilder> {
    /**
     * Invoke action second
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SecondPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action second
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SecondPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SecondPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSecondPostRequestBody(writer: SerializationWriter, secondPostRequestBody: Partial<SecondPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!secondPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("serialNumber", secondPostRequestBody.serialNumber);
    writer.writeAdditionalData(secondPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const SecondRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/second";
/**
 * Metadata for all the requests in the request builder.
 */
export const SecondRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SecondRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSecondPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
