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
 * UserData
 * @export
 * @interface UserData
 */
export interface UserData {
    /**
     * Email
     * @type {string}
     * @memberof UserData
     */
    email: string;
    /**
     * Balance
     * @type {number}
     * @memberof UserData
     */
    balance: number;
    /**
     * Free Credit
     * @type {number}
     * @memberof UserData
     */
    freeCredit: number;
    /**
     * Email Verified
     * @type {boolean}
     * @memberof UserData
     */
    emailVerified: boolean;
    /**
     * Account Disabled
     * @type {boolean}
     * @memberof UserData
     */
    accountDisabled: boolean;
    /**
     * Is Active
     * @type {boolean}
     * @memberof UserData
     */
    isActive: boolean;
}


