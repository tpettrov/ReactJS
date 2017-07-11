/**
 * Created by apetrov on 7/11/2017.
 */
class Auth {

    static saveUser(user) {

        window.localStorage.setItem('user', JSON.stringify(user))

    }

    static getUser(user){

        const userJson = window.localStorage.getItem('user')

        if(userJson) {
            return JSON.parse(userJson)
        } else {

            return {}
        }

    }

    static removeUser(){

        window.localStorage.removeItem('user')
    }

    static authenticateUser(token) {
        window.localStorage.setItem('token', token)
    }

    static isUserAuthenticated() {
        return window.localStorage.getItem('token') !== null
    }


    static deauthenticateUser() {
        window.localStorage.removeItem('token')
    }


    static getToken() {
        return window.localStorage.getItem('token')
    }
}

export default Auth