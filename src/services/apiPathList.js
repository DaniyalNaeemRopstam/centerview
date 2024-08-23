import BaseUrl from "./BaseUrl";

const UPLOAD_IMAGE = BaseUrl + 'api/media/upload'



const LOGIN_URL = BaseUrl + 'wp-json/jwt-auth/v1/token'
const GET_SPEAKERS = BaseUrl + 'wp-json/wp/v2/posts/?tags=26'
const GET_UPCOMMING_EVENTS = BaseUrl + 'wp-json/wp/v2/activities/'
const REGISTER_EVENTS = BaseUrl + "wp-json/wp/v2/user-register-activity/"
const UNREGISTER_EVENTS = BaseUrl + "wp-json/wp/v2/user-unregister-activity/"
const HOME_API = BaseUrl + 'wp-json/wp/v2/home/'
const DEVICE_TOKEN_API = BaseUrl + 'wp-json/wp/v2/save-token/'
const NOTIFICATION_LIST = BaseUrl + 'wp-json/wp/v2/user-notifications-list/'


export const API_URLS = {
    LOGIN_URL, GET_SPEAKERS, GET_UPCOMMING_EVENTS, REGISTER_EVENTS, UNREGISTER_EVENTS, HOME_API, DEVICE_TOKEN_API,
    NOTIFICATION_LIST,
}