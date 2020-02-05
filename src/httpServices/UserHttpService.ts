import User from '@/models/User'
import API from '@/httpServices/API'

export default class UserHttpService {
    public static register(user: User) {
        return API.post('register', user)
    }

    public static login(login: string, password: string) {
        return API.post('login', { login: login, password: password })
    }
}
