/**
 * Created by apetrov on 7/11/2017.
 */
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import userActions from '../actions/UserActions'
import userData from '../data/UserData'

class UserStore extends EventEmitter {


    register(user) {

        userData.register(user).then(data => this.emit(this.eventTypes.USER_REGISTERED, data))   //emits change (registration) and sends the data with the emit

    }

    login(user){

        userData.login(user).then(data => this.emit(this.eventTypes.USER_LOGGED, data))
    }


    handleAction(action) {

        switch (action.type) {

            case userActions.types.REGISTER_USER: {

                this.register(action.user)
                break
            }

            case userActions.types.LOGIN_USER: {

                this.login(action.user)
                break
            }

            default:
                break


        }




    }


}

let userStore = new UserStore()
userStore.eventTypes = {

    USER_REGISTERED: 'user_registered',
    USER_LOGGED: 'user_logged'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore