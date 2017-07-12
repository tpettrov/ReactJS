/**
 * Created by Toni on 7/12/2017.
 */
import dispatcher from '../dispatcher'


const petActions = {


    types: {

        CREATE_PET: 'CREATE_PET',


    },

    create (pet) {

        dispatcher.dispatch({

            type: this.types.CREATE_PET,
            pet

        })

    }
}

export default petActions