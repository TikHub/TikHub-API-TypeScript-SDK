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


import { ApiKeyData } from './api-key-data';
import { UserData } from './user-data';

/**
 * UserInfoResponseModel
 * @export
 * @interface UserInfoResponseModel
 */
export interface UserInfoResponseModel {
    /**
     * Code，HTTP status code | HTTP状态码
     * @type {number}
     * @memberof UserInfoResponseModel
     */
    code?: number;
    /**
     * Router，The endpoint that generated this response | 生成此响应的端点
     * @type {string}
     * @memberof UserInfoResponseModel
     */
    router?: string;
    /**
     * 
     * @type {ApiKeyData}
     * @memberof UserInfoResponseModel
     */
    apiKeyData: ApiKeyData;
    /**
     * 
     * @type {UserData}
     * @memberof UserInfoResponseModel
     */
    userData: UserData;
}


