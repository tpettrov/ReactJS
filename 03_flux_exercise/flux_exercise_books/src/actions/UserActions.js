import dispatcher from '../dispatcher'

let userActions = {

    registerUser: (user) => {
        
        dispatcher.dispatch({
            
            type: 'REGISTER_USER',
            data: user
        })
    }

   

}

export default userActions