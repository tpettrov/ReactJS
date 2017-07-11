/**
 * Created by apetrov on 7/11/2017.
 */


class UserData {

    static register (user){


            return window.fetch('http://localhost:5000/auth/signup', {

                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(user),
                headers: {

                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }


            })
                .then ((response) => {

                        return response.json()
                })

    }

}

export default UserData