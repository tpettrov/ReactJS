/**
 * Created by apetrov on 7/11/2017.
 */
const baseURL = 'http://localhost:5000/'

const getOptions = () => ({

    method: 'POST',
    mode: 'cors',
    headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

})

const handleJsonResponse = res => res.json()

class UserData {

    static register(user) {

        const options = getOptions()
        options.body = JSON.stringify(user)

        return window.fetch(`${baseURL}auth/signup`, options)
            .then(handleJsonResponse)

    }

    static login(user) {

        const options = getOptions()
        options.body = JSON.stringify(user)

        return window.fetch(`${baseURL}auth/login`, options)
            .then(handleJsonResponse)


    }

}

export default UserData