/**
 * Created by apetrov on 7/11/2017.
 */
class Auth {


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