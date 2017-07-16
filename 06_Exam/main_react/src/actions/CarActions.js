/**
 * Created by Toni on 7/16/2017.
 */
import dispatcher from '../dispatcher'


const carActions = {


    types: {

        CREATE_CAR: 'CREATE_CAR',
        GET_CARS: 'GET_CARS',
        GET_STATS: 'GET_STATS',
        GET_CAR_BY_ID: 'GET_CAR_BY_ID',
        GET_REVIEWS: 'GET_REVIEWS',
        ADD_NEW_REVIEW: 'ADD_NEW_REVIEW',
        LIKE: 'LIKE',
        GET_USER_CARS: 'GET_USER_CARS',
        DELETE: 'DELETE'

    },

    create (car) {

        dispatcher.dispatch({

            type: this.types.CREATE_CAR,
            car

        })

    },

    get (page) {

        dispatcher.dispatch({

            type: this.types.GET_CARS,
            page

        })

    },

    getStats () {

        dispatcher.dispatch({

            type: this.types.GET_STATS,


        })

    },

    getCarById (id) {

        dispatcher.dispatch({

            type: this.types.GET_CAR_BY_ID,
            id

        })

    },

    getReviews (id) {

        dispatcher.dispatch({

            type: this.types.GET_REVIEWS,
            id

        })

    },
    addReview (newReview, id) {

        dispatcher.dispatch({

            type: this.types.ADD_NEW_REVIEW,
            newReview,
            id

        })

    },

    like (id) {

        dispatcher.dispatch({

            type: this.types.LIKE,
            id

        })

    },


    getUserCars () {

        dispatcher.dispatch({

            type: this.types.GET_USER_CARS,


        })

    },

    delete (carId) {

        dispatcher.dispatch({

            type: this.types.DELETE,
            carId

        })

    }



}

export default carActions