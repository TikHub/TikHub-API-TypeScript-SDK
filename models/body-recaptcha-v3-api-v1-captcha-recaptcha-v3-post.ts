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
 * Body_recaptcha_v3_api_v1_captcha_recaptcha_v3_post
 * @export
 * @interface BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post
 */
export interface BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post {
    /**
     * Sitekey，Sitekey
     * @type {string}
     * @memberof BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post
     */
    sitekey: string;
    /**
     * Url，URL
     * @type {string}
     * @memberof BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post
     */
    url: string;
    /**
     * Action，Action
     * @type {string}
     * @memberof BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post
     */
    action?: string;
    /**
     * Proxy，Proxy
     * @type {object}
     * @memberof BodyRecaptchaV3ApiV1CaptchaRecaptchaV3Post
     */
    proxy?: object;
}


