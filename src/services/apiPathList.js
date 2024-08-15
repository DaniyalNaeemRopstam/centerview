import BaseUrl from "./BaseUrl";

const UPLOAD_IMAGE = BaseUrl + 'api/media/upload'



const LOGIN_URL = BaseUrl + 'wp-json/jwt-auth/v1/token'
const GET_SPEAKERS = BaseUrl + 'wp-json/wp/v2/posts'
const GET_UPCOMMING_EVENTS = BaseUrl +'wp-json/wp/v2/activities/'


export const API_URLS = {
    LOGIN_URL, GET_SPEAKERS, GET_UPCOMMING_EVENTS
}