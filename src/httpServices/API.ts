import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import AuthHelper from '@/helpers/AuthHelper'

const API: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})

API.interceptors.request.use(
    (config): AxiosRequestConfig => {
        const token = AuthHelper.getToken()
        if (token !== null) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error): Promise<never> => Promise.reject(error)
)

export default API
