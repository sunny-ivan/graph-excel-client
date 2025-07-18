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
 * @returns {VdbPostRequestBody}
 */
// @ts-ignore
export function createVdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoVdbPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param VdbPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoVdbPostRequestBody(vdbPostRequestBody: Partial<VdbPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { vdbPostRequestBody.cost = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "endPeriod": n => { vdbPostRequestBody.endPeriod = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "factor": n => { vdbPostRequestBody.factor = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "life": n => { vdbPostRequestBody.life = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "noSwitch": n => { vdbPostRequestBody.noSwitch = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "salvage": n => { vdbPostRequestBody.salvage = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "startPeriod": n => { vdbPostRequestBody.startPeriod = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param VdbPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeVdbPostRequestBody(writer: SerializationWriter, vdbPostRequestBody: Partial<VdbPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!vdbPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("cost", vdbPostRequestBody.cost);
    writer.writeObjectValue("endPeriod", vdbPostRequestBody.endPeriod);
    writer.writeObjectValue("factor", vdbPostRequestBody.factor);
    writer.writeObjectValue("life", vdbPostRequestBody.life);
    writer.writeObjectValue("noSwitch", vdbPostRequestBody.noSwitch);
    writer.writeObjectValue("salvage", vdbPostRequestBody.salvage);
    writer.writeObjectValue("startPeriod", vdbPostRequestBody.startPeriod);
    writer.writeAdditionalData(vdbPostRequestBody.additionalData);
}
export interface VdbPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The cost property
     */
    cost?: UntypedNode | null;
    /**
     * The endPeriod property
     */
    endPeriod?: UntypedNode | null;
    /**
     * The factor property
     */
    factor?: UntypedNode | null;
    /**
     * The life property
     */
    life?: UntypedNode | null;
    /**
     * The noSwitch property
     */
    noSwitch?: UntypedNode | null;
    /**
     * The salvage property
     */
    salvage?: UntypedNode | null;
    /**
     * The startPeriod property
     */
    startPeriod?: UntypedNode | null;
}
/**
 * Provides operations to call the vdb method.
 */
export interface VdbRequestBuilder extends BaseRequestBuilder<VdbRequestBuilder> {
    /**
     * Invoke action vdb
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: VdbPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action vdb
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: VdbPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VdbRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/vdb";
/**
 * Metadata for all the requests in the request builder.
 */
export const VdbRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: VdbRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVdbPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
