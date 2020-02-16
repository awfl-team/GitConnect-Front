import jwtdecode, { Options } from 'jwt-decode'

export default class AuthHelper {
    static getUserInfo(token: string): Options {
        return jwtdecode(token)
    }

    static logout(): void {
        localStorage.removeItem('GitConnectToken')
    }

    static setTokenInLocalStorage(jwt: JSON): void {
        const token = JSON.stringify(jwt)
        localStorage.setItem('GitConnectToken', token.replace(/['"]+/g, ''))
    }

    public static getToken(): string | null {
        return localStorage.getItem('GitConnectToken')
    }
}
