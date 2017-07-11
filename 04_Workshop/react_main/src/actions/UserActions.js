/**
 * Created by apetrov on 7/11/2017.
 */
import dispatcher from '../dispatcher'


const userActions = {


    types: {

        REGISTER_USER: 'REGISTER_USER'

    },

    register (user) {

        dispatcher.dispatch({

            type: this.types.REGISTER_USER,
            user

        })

    }


}

export default userActions