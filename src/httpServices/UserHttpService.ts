import User from '@/models/User'
import api from '@/httpServices/api'

export default class UserHttpService {
    public static signUp(user: User) {
        return api.post('signup', {
            Email: user.email,
            Username: user.username,
            Password: user.password
        })
    }
}
