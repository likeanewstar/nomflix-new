import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    /* params: {
        api_key: "8c13938df52cc9781948ae609c899c5e",
        language: "en-US"
    } */
});

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['api_key'] = "8c13938df52cc9781948ae609c899c5e";
    config.params['language'] = "en-US";
    return config;
});

api.get("tv/popular");

export default api;