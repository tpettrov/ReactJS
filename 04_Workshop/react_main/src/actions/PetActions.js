/**
 * Created by Toni on 7/12/2017.
 */
import dispatcher from '../dispatcher'


const petActions = {


    types: {

        CREATE_PET: 'CREATE_PET',
        GET_PETS: 'GET_PETS'


    },

    create (pet) {

        dispatcher.dispatch({

            type: this.types.CREATE_PET,
            pet

        })

    },
    get (page) {

        dispatcher.dispatch({

            type: this.types.GET_PETS,
            page

        })

    }

}

export default petActions