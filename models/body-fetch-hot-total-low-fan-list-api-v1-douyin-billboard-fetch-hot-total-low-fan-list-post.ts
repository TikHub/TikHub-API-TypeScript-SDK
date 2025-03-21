// tslint:disable
/**
 * TikHub Private API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Body_fetch_hot_total_low_fan_list_api_v1_douyin_billboard_fetch_hot_total_low_fan_list_post
 * @export
 * @interface BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost
 */
export interface BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost {
    /**
     * Page，页码
     * @type {number}
     * @memberof BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost
     */
    page?: number;
    /**
     * Page Size，每页数量
     * @type {number}
     * @memberof BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost
     */
    pageSize?: number;
    /**
     * Date Window，时间窗口，1 按小时 2 按天
     * @type {number}
     * @memberof BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost
     */
    dateWindow?: number;
    /**
     * Tags，子级垂类标签，空则为全部，多个标签需传入{\"value\": \"{顶级垂类标签id}\", \"children\": [{\"value\": \"{子级垂类标签id}\"}, {\"value\": \"{子级垂类标签id}\"}]}
     * @type {Array<object>}
     * @memberof BodyFetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost
     */
    tags?: Array<object>;
}


