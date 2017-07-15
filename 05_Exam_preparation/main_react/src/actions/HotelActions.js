/**
 * Created by Toni on 7/15/2017.
 */
import dispatcher from '../dispatcher'


const hotelActions = {


    types: {

        CREATE_HOTEL: 'CREATE_HOTEL',
        GET_HOTELS: 'GET_HOTELS',
        GET_HOTEL_BY_ID: 'GET_HOTEL_BY_ID',
        ADD_COMMENT: 'ADD_COMMENT',
        GET_COMMENTS: 'GET_COMMENTS'
    },

    create (hotel) {

        dispatcher.dispatch({

            type: this.types.CREATE_HOTEL,
            hotel

        })

    },

    getHotels (page) {

        dispatcher.dispatch({

            type: this.types.GET_HOTELS,
            page

        })

    },

    getHotelById (id) {

        dispatcher.dispatch({

            type: this.types.GET_HOTEL_BY_ID,
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

    getComments (hotelId) {

        dispatcher.dispatch({

            type: this.types.GET_COMMENTS,
            hotelId

        })

    }

}

export default hotelActions