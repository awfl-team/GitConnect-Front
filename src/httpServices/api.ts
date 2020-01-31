import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import AuthHelper from '@/helpers/AuthHelper'

const api: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})

export default api

api.interceptors.request.use(
    (config): AxiosRequestConfig => {
        const token = AuthHelper.getToken()
        const configuration = config
        if (token !== null) configuration.headers.Authorization = `Bearer ${token}`
        return configuration
    },
    (error): Promise<never> => Promise.reject(error)
)
