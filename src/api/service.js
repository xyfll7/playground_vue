import axios from 'axios'
import { getToken } from '@/utils/token'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(
    config => {
        config.headers.common['token'] = getToken()
        return config
    },
    error => Promise.reject(error)
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => Promise.reject(error)
)

export default service