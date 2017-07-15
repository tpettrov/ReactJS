/**
 * Created by Toni on 7/15/2017.
 */
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import hotelActions from '../actions/HotelActions'
import hotelData from '../data/HotelData'


class HotelStore extends EventEmitter {


    create(hotel) {

        hotelData.create(hotel).then(data => this.emit(this.eventTypes.HOTEL_CREATED, data))   //emits change (registration) and sends the data with the emit

    }

    getHotels(page) {

        hotelData.get(page).then(data => this.emit(this.eventTypes.HOTELS_LOADED, data))
    }

    getHotelById(id) {

        hotelData.getById(id).then(data => this.emit(this.eventTypes.HOTEL_SINGLE_LOADED, data))
    }

    addComment(comment, id) {

        hotelData.addComment(comment, id).then(data => this.emit(this.eventTypes.COMMENT_ADDED, data))
    }

    getComments(hotelId) {

        hotelData.getComments(hotelId).then(data => this.emit(this.eventTypes.COMMENTS_LOADED, data))
    }


    handleAction(action) {

        switch (action.type) {

            case hotelActions.types.CREATE_HOTEL: {

                this.create(action.hotel)
                break
            }

            case hotelActions.types.GET_HOTELS: {

                this.getHotels(action.page)
                break
            }


            case hotelActions.types.GET_HOTEL_BY_ID: {

                this.getHotelById(action.id)
                break
            }

            case hotelActions.types.ADD_COMMENT: {

                this.addComment(action.comment, action.id)
                break
            }

            case hotelActions.types.GET_COMMENTS: {

                this.getComments(action.hotelId)
                break
            }


            default:
                break


        }


    }


}

let hotelStore = new HotelStore()
hotelStore.eventTypes = {

    HOTEL_CREATED: 'hotel_created',
    HOTELS_LOADED: 'hotels_loaded',
    HOTEL_SINGLE_LOADED: 'HOTEL_SINGLE_LOADED',
    COMMENT_ADDED: 'COMMENT_ADDED',
    COMMENTS_LOADED: 'COMMENTS_LOADED'
}

dispatcher.register(hotelStore.handleAction.bind(hotelStore))
export default hotelStore