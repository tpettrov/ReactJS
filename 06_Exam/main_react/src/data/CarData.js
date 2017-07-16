/**
 * Created by Toni on 7/16/2017.
 */
import data from './Data'
const baseUrl = 'cars'

class CarData {

    static create(car) {

        return data.post(`${baseUrl}/create`, car, true)
    }

    static getCars(page) {

        return data.get(`${baseUrl}/all?page=${page}`)
    }

    static getStats() {

        return data.get(`stats`)
    }

    static getCarById(id) {

        return data.get(`${baseUrl}/details/${id}`, true)
    }

    static getReviews(id) {

        return data.get(`${baseUrl}/details/${id}/reviews`, true)
    }

    static addNewReview(newReview, id) {

        return data.post(`${baseUrl}/details/${id}/reviews/create`, newReview, true)
    }

    static like(id) {

        return data.post(`${baseUrl}/details/${id}/like`, {}, true)
    }

    static getUserCars() {

        return data.get(`${baseUrl}/mine`, true)
    }

    static delete(id) {

        return data.myPost(`${baseUrl}/delete/${id}`, true)
    }




}

export default CarData