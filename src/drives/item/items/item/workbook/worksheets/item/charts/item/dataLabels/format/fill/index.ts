/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookChartFillFromDiscriminatorValue, serializeWorkbookChartFill, type WorkbookChartFill } from '../../../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { ClearRequestBuilderRequestsMetadata, type ClearRequestBuilder } from './clear/';
// @ts-ignore
import { SetSolidColorRequestBuilderRequestsMetadata, type SetSolidColorRequestBuilder } from './setSolidColor/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fill property of the microsoft.graph.workbookChartDataLabelFormat entity.
 */
export interface FillRequestBuilder extends BaseRequestBuilder<FillRequestBuilder> {
    /**
     * Provides operations to call the clear method.
     */
    get clear(): ClearRequestBuilder;
    /**
     * Provides operations to call the setSolidColor method.
     */
    get setSolidColor(): SetSolidColorRequestBuilder;
    /**
     * Delete navigation property fill for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the fill format of the current chart data label. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartFill>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FillRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookChartFill | undefined>;
    /**
     * Update the navigation property fill in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartFill>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookChartFill, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartFill | undefined>;
    /**
     * Delete navigation property fill for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the fill format of the current chart data label. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FillRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property fill in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookChartFill, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the fill format of the current chart data label. Read-only.
 */
export interface FillRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const FillRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/dataLabels/format/fill{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FillRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FillRequestBuilderNavigationMetadata: Record<Exclude<keyof FillRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    clear: {
        requestsMetadata: ClearRequestBuilderRequestsMetadata,
    },
    setSolidColor: {
        requestsMetadata: SetSolidColorRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FillRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FillRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FillRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartFillFromDiscriminatorValue,
        queryParametersMapper: FillRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FillRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartFillFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookChartFill,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */