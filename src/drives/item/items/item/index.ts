/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type WorkbookRequestBuilder, WorkbookRequestBuilderNavigationMetadata, WorkbookRequestBuilderRequestsMetadata } from './workbook/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /drives/{drive-id}/items/{driveItem-id}
 */
export interface DriveItemItemRequestBuilder extends BaseRequestBuilder<DriveItemItemRequestBuilder> {
    /**
     * Provides operations to manage the workbook property of the microsoft.graph.driveItem entity.
     */
    get workbook(): WorkbookRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const DriveItemItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DriveItemItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DriveItemItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    workbook: {
        requestsMetadata: WorkbookRequestBuilderRequestsMetadata,
        navigationMetadata: WorkbookRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
