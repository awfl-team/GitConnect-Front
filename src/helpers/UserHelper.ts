export default class UserHelper {
    public static verifyUserUsernameFormat(username: string): boolean | string {
        const usernameFormat = /^[aA-zZ0-9_-]{3,16}$/

        if (username === '' || !username) {
            return 'Username is required'
        } else if (username.length < 3) {
            return 'Username must be more than 3 characters'
        } else if (username.length > 16) {
            return 'Username must be less than 16 characters'
        } else if (!usernameFormat.test(username)) {
            return 'Username must only contains characters or digits'
        }

        return true
    }

    public static verifyUserMailFormat(email: string): boolean | string {
        const emailFormat = /^[a-zA-Z0-9-+_+]+@.+\.[a-zA-Z0-9-+_+]+$/

        if (email === '' || !email) {
            return 'E-Mail is required'
        } else if (!emailFormat.test(email)) {
            return 'E-Mail is not in a valid format'
        }

        return true
    }

    public static verifyPasswordAndConfirmPassword(
        password: string,
        confirmPassword: string
    ): boolean | string {
        if (password !== confirmPassword) {
            return 'Password and confirmed password must identical'
        }

        return true
    }

    public static verifyPasswordOrConfirmPasswordFormat(password: string): boolean | string {
        const passwordFormat = /^[a-zA-Z0-9_+-+\w!@&.]{8,16}$/

        if (password === '' || !password) {
            return 'Password is required'
        } else if (password.length < 8) {
            return 'Password must be more than 8 characters'
        } else if (password.length > 16) {
            return 'Password must be less than 16 characters'
        } else if (!passwordFormat.test(password)) {
            return 'Password is not in a valid format'
        }

        return true
    }
}
