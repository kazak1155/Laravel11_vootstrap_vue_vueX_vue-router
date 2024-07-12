import axios from "axios";
import router from "./router.js";


const apiAxios = axios.create()


apiAxios.interceptors.request.use(function (config) {
    if (localStorage.getItem('access_token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config
}, function (error) {
    // Do something with request error frontend
    return Promise.reject(error);
});

apiAxios.interceptors.response.use(function (response) {
    if (localStorage.getItem('access_token')) {
        response.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return response
}, function (error) {

    if (error.response.data.message === 'Token has expired') {
        return axios.post('/api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token)

                error.config.headers.Authorization = `Bearer ${res.data.access_token}`

                return apiAxios.request(error.config)
            })
    }

    if (error.response.status === 401) {
        router.push({name: 'user.login'})
    }

    return Promise.reject(error);
});

export default apiAxios
