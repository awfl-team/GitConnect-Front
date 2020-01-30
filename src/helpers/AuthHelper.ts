import jwtdecode from 'jwt-decode'

export default class AuthHelper {
    static getUserInfo(token: string) {
        return jwtdecode(token)
    }

    static logout() {
        localStorage.removeItem('GitConnectToken')
    }

    static setTokenInLocalStorage(jwt: JSON) {
        const token = JSON.stringify(jwt)
        localStorage.setItem('GitConnectToken', token.replace(/['"]+/g, ''))
    }

    public static getToken() {
        return localStorage.getItem('GitConnectToken')
    }
}
