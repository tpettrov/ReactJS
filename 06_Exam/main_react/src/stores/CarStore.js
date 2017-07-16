/**
 * Created by Toni on 7/16/2017.
 */
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import carActions from '../actions/CarActions'
import carData from '../data/CarData'

class CarStore extends EventEmitter {


    create(car) {

        carData.create(car).then(data => this.emit(this.eventTypes.CAR_CREATED, data))   //emits change (registration) and sends the data with the emit

    }

    getCars(page) {

        carData.getCars(page).then(data => this.emit(this.eventTypes.CARS_LOADED, data))

    }

    getStats() {

        carData.getStats().then(data => this.emit(this.eventTypes.STATS_LOADED, data))

    }

    getCarById(id) {

        carData.getCarById(id).then(data => this.emit(this.eventTypes.CAR_BY_ID_LOADED, data))

    }

    getReviews(id) {

        carData.getReviews(id).then(data => this.emit(this.eventTypes.REVIEWS_LOADED, data))

    }

    addNewReview(newReview, carId) {

        carData.addNewReview(newReview, carId).then(data => this.emit(this.eventTypes.NEW_REVIEW_ADDED, data))

    }

    like(carId) {

        carData.like(carId).then(data => this.emit(this.eventTypes.CAR_LIKED, data))

    }

    getUserCars() {

        carData.getUserCars().then(data => this.emit(this.eventTypes.USER_CARS_LOADED, data))

    }

    delete(id) {

        carData.delete(id).then(data => this.emit(this.eventTypes.CAR_DELETED, data))

    }



    handleAction(action) {

        switch (action.type) {

            case carActions.types.CREATE_CAR: {

                this.create(action.car)
                break
            }

            case carActions.types.GET_CARS: {

                this.getCars(action.page)
                break
            }

            case carActions.types.GET_STATS: {

                this.getStats()
                break
            }

            case carActions.types.GET_CAR_BY_ID: {

                this.getCarById(action.id)
                break
            }

            case carActions.types.GET_REVIEWS: {

                this.getReviews(action.id)
                break
            }

            case carActions.types.ADD_NEW_REVIEW: {

                this.addNewReview(action.newReview,action.id)
                break
            }

            case carActions.types.LIKE: {

                this.like(action.id)
                break
            }

            case carActions.types.GET_USER_CARS: {

                this.getUserCars()
                break
            }

            case carActions.types.DELETE: {

                this.delete(action.carId)
                break
            }


            default:
                break


        }




    }


}

let carStore = new CarStore()
carStore.eventTypes = {

    CAR_CREATED: 'car_created',
    CARS_LOADED: 'cars_loaded',
    STATS_LOADED: 'stats_loaded',
    CAR_BY_ID_LOADED: 'car_by_id_loaded',
    REVIEWS_LOADED: 'reviews_loaded',
    NEW_REVIEW_ADDED: 'new_review_added',
    CAR_LIKED: 'car_liked',
    USER_CARS_LOADED: 'user_cars_loaded',
    CAR_DELETED: 'car_deleted'
}

dispatcher.register(carStore.handleAction.bind(carStore))
export default carStore