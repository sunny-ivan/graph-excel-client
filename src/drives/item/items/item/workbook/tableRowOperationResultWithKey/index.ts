/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookTableRowFromDiscriminatorValue, type WorkbookTableRow } from '../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the tableRowOperationResult method.
 */
export interface TableRowOperationResultWithKeyRequestBuilder extends BaseRequestBuilder<TableRowOperationResultWithKeyRequestBuilder> {
    /**
     * This function is the last in a series of steps to create a workbookTableRow resource asynchronously. A best practice to create multiple table rows is to batch them in one create tableRow operation and carry out the operation asynchronously. An asynchronous request to create table rows involves the following steps:1. Issue an async Create tableRow request and get the query URL returned in the Location response header.2. Use the query URL returned from step 1 to issue the Get workbookOperation request and get the operation ID for step 3.     Alternatively, for convenience, after you get a succeeded operationStatus result, you can get the query URL from the resourceLocation property of the workbookOperation returned in the response, and apply the query URL to step 3. 3. Use the query URL returned from step 2 as the GET request URL for this function tableRowOperationResult. A successful function call returns the new table rows in a workbookTableRow resource. This function does not do anything if called independently.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookTableRow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookTableRow | undefined>;
    /**
     * This function is the last in a series of steps to create a workbookTableRow resource asynchronously. A best practice to create multiple table rows is to batch them in one create tableRow operation and carry out the operation asynchronously. An asynchronous request to create table rows involves the following steps:1. Issue an async Create tableRow request and get the query URL returned in the Location response header.2. Use the query URL returned from step 1 to issue the Get workbookOperation request and get the operation ID for step 3.     Alternatively, for convenience, after you get a succeeded operationStatus result, you can get the query URL from the resourceLocation property of the workbookOperation returned in the response, and apply the query URL to step 3. 3. Use the query URL returned from step 2 as the GET request URL for this function tableRowOperationResult. A successful function call returns the new table rows in a workbookTableRow resource. This function does not do anything if called independently.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TableRowOperationResultWithKeyRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tableRowOperationResult(key='{key}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const TableRowOperationResultWithKeyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TableRowOperationResultWithKeyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookTableRowFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
