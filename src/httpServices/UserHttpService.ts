import User from '@/models/User'
import API from '@/httpServices/api'

export default class UserHttpService {
    public static signUp(user: User) {
        return API.post('register', user)
    }
}
