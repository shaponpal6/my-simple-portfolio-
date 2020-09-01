const host = global.location.href;
var baseurl= host.replace(new RegExp("(.*/)[^/]+$"),"$1");


export const keys = {
    apiUrl: baseurl,
    apiUrl2: process.env.API_URL
}