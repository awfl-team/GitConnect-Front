import User from '@/models/User'
import API from '@/httpServices/API'

export default class UserHttpService {
    public static register(user: User) {
        return API.post('register', user)
    }

    public static login(user: User) {
        return API.post('login', user)
    }
}
