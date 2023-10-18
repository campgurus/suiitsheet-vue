import axios from 'axios'
// import router from '../router'

const config = {
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/vnd.api+json',
        Accept: '*/*',
        // Accept: 'application/vnd.api+json',
        Authorization: 'JWT ' + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: false
}

const API = axios.create(config)

// API.interceptors.response.use(undefined, function (error) {
//     if (error) {
//         if (error.response.status === 401) {
//             store.dispatch('logout').then(() => {
//                 return router.push('/login')
//             })
//         }
//     }
// })
export default API
