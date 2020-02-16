import { AxiosResponse } from 'axios'
import User from '@/models/User'
import API from '@/httpServices/API'

export default class UserHttpService {
    public static register(user: User): Promise<AxiosResponse> {
        return API.post('register', user)
    }

    public static login(login: string, password: string): Promise<AxiosResponse> {
        return API.post('login', { login: login, password: password })
    }
}
