/**
 * Created by Toni on 7/12/2017.
 */
import dispatcher from '../dispatcher'


const petActions = {


    types: {

        CREATE_PET: 'CREATE_PET',
        GET_PETS: 'GET_PETS',
        GET_PET_BY_ID: 'GET_PET_BY_ID',
        ADD_COMMENT: 'ADD_COMMENT',
        GET_COMMENTS: 'GET_COMMENTS'


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

    },


    getPetbyId (id) {

        dispatcher.dispatch({

            type: this.types.GET_PET_BY_ID,
            id

        })

    },

    addComment (comment, id) {

        dispatcher.dispatch({

            type: this.types.ADD_COMMENT,
            comment,
            id

        })

    },

    getComments (id) {

        dispatcher.dispatch({

            type: this.types.GET_COMMENTS,
            id

        })

    }




}

export default petActions