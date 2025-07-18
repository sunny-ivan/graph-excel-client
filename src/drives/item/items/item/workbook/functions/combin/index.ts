/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

export interface CombinPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The number property
     */
    number?: UntypedNode | null;
    /**
     * The numberChosen property
     */
    numberChosen?: UntypedNode | null;
}
/**
 * Provides operations to call the combin method.
 */
export interface CombinRequestBuilder extends BaseRequestBuilder<CombinRequestBuilder> {
    /**
     * Invoke action combin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CombinPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action combin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CombinPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CombinPostRequestBody}
 */
// @ts-ignore
export function createCombinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCombinPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param CombinPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCombinPostRequestBody(combinPostRequestBody: Partial<CombinPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { combinPostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "numberChosen": n => { combinPostRequestBody.numberChosen = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param CombinPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCombinPostRequestBody(writer: SerializationWriter, combinPostRequestBody: Partial<CombinPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!combinPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("number", combinPostRequestBody.number);
    writer.writeObjectValue("numberChosen", combinPostRequestBody.numberChosen);
    writer.writeAdditionalData(combinPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CombinRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/combin";
/**
 * Metadata for all the requests in the request builder.
 */
export const CombinRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CombinRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCombinPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
