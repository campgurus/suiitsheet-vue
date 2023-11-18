import axios from 'axios'
import router from '../router'

const config = {
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/vnd.api+json',
        Accept: '*/*',
        // Accept: 'application/vnd.api+json',
        Authorization: {
            toString () {
                if (localStorage.getItem('token')) {
                    return `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: false
}

const API = axios.create(config)

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('401 received')
            // Use router.push() to navigate to the login screen
            router.push('/login-signup'); // Adjust the route as needed
            // Throw an exception to stop further execution
            // return Promise.reject('Unauthorized');
        }
        // Handle other errors here
        return Promise.reject(error);
    }
);

export default API
