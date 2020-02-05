import { FieldValidation } from '@/types/FieldValidation'

export default class UserHelper {
    public static verifyUsernameFormat(username: string | undefined): FieldValidation {
        const usernameFormat = /^[aA-zZ0-9_-]{3,16}$/

        if (username === '' || !username) {
            return { isValid: false, message: 'Username is required' }
        } else if (username.length < 3) {
            return { isValid: false, message: 'Username must be more than 3 characters' }
        } else if (username.length > 16) {
            return { isValid: false, message: 'Username must be less than 16 characters' }
        } else if (!usernameFormat.test(username)) {
            return { isValid: false, message: 'Username must only contains characters or digits' }
        }

        return { isValid: true, message: 'Valid username format' }
    }

    public static verifyEmailFormat(email: string | undefined): FieldValidation {
        const emailFormat = /^[a-zA-Z0-9-+_+]+@.+\.[a-zA-Z0-9-+_+]+$/

        if (email === '' || !email) {
            return { isValid: false, message: 'E-Mail is required' }
        } else if (!emailFormat.test(email)) {
            return { isValid: false, message: 'E-Mail is not in a valid format' }
        }

        return { isValid: true, message: 'Valid format email' }
    }

    public static verifyPasswordFormat(
        password: string | undefined,
        confirmPassword: string | undefined
    ): FieldValidation {
        const passwordFormat = /^[a-zA-Z0-9_+-+\w!@&.]{8,16}$/

        if (password === '' || !password) {
            return { isValid: false, message: 'Password is required' }
        } else if (password.length < 8) {
            return { isValid: false, message: 'Password must be more than 8 characters' }
        } else if (password.length > 16) {
            return { isValid: false, message: 'Password must be less than 16 characters' }
        } else if (!passwordFormat.test(password)) {
            return { isValid: false, message: 'Password is not in a valid format' }
        }

        if (confirmPassword === '' || !confirmPassword) {
            return { isValid: false, message: 'Confirmed password is required' }
        } else if (confirmPassword.length < 8) {
            return { isValid: false, message: 'Confirmed password must be more than 8 characters' }
        } else if (confirmPassword.length > 16) {
            return { isValid: false, message: 'Confirmed password must be less than 16 characters' }
        } else if (!passwordFormat.test(password)) {
            return { isValid: false, message: 'Confirmed password is not in a valid format' }
        }

        if (password !== confirmPassword) {
            return { isValid: false, message: 'Password and confirmed password must be identical' }
        }

        return { isValid: true, message: 'Password and confirmed password are valid' }
    }

    public static verifyPasswordIsRequired(password: string): FieldValidation {
        if (password === '' || !password) {
            return { isValid: false, message: 'Password is required' }
        }

        return { isValid: true, message: 'Password is valid' }
    }

    public static verifyLoginIsRequired(login: string): FieldValidation {
        if (login === '' || !login) {
            return { isValid: false, message: 'Login is required' }
        }

        return { isValid: true, message: 'Login is valid' }
    }

    public static getFieldHintByType(fieldName: string): string {
        switch (fieldName) {
            case 'username':
                return 'Username must be between 3 and 16 characters long'
            case 'email':
                return 'Must be like : exemple@gitconnect.com'
            case 'password':
                return (
                    'Password must be between 8 and 16 characters, it may contains digits and' +
                    ' the following characters : -_!@&.'
                )
            case 'confirmPassword':
                return (
                    'Confirm password must be between 8 and 16 characters, ' +
                    'it may contains digits and the following characters : -_!@&.'
                )
            default:
                return ''
        }
    }
}
