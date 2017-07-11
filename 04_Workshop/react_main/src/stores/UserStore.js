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


    handleAction(action) {

        switch (action.type) {

            case userActions.types.REGISTER_USER: {

                this.register(action.user)
                break
            }

            default:
                break


        }




    }


}

let userStore = new UserStore()
userStore.eventTypes = {

    USER_REGISTERED: 'user_registered'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore