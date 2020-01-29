export class User {
    id: string | undefined
    username: string | undefined
    email: string | undefined
    password: string | undefined

    constructor(id?: string, username?: string, email?: string, password?: string) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
}
