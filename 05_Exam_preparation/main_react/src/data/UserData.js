/**
 * Created by apetrov on 7/11/2017.
 */
import data from './Data'
const baseUrl = 'auth'

class UserData {

    static register(user) {

            return data.post(`${baseUrl}/signup`, user)
    }

    static login(user) {

        return data.post(`${baseUrl}/login`, user)

    }

}

export default UserData