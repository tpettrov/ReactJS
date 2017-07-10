/**
 * Created by Toni on 7/5/2017.
 */
import {EventEmitter} from 'events'
import DB from '../data.js'
import dispatcher from '../dispatcher'

class UserStore extends EventEmitter {

    constructor() {

        super()

        this.books = DB
       

    }

   

    handleActionUser (action) {
        
        switch (action.type) {
            case 'REGISTER_USER': {
                
                console.log('tuk')
                break
            }
            default: break
        }
    }


}

let userStore = new UserStore()

dispatcher.register(userStore.handleActionUser.bind(userStore))


export default userStore
