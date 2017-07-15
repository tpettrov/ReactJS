/**
 * Created by Toni on 7/15/2017.
 */
import data from './Data'
const baseUrl = 'hotels'

class HotelData {

    static create(hotel) {

        return data.post(`${baseUrl}/create`, hotel, true)
    }


    static get(page) {

        return data.get(`${baseUrl}/all?page=${page}`)
    }

    static getById(id) {

        return data.get(`${baseUrl}/details/${id}`, true)
    }

    static addComment(comment, id) {

        return data.post(`${baseUrl}/details/${id}/reviews/create`, comment, true)
    }

    static getComments(hotelId) {

        return data.get(`${baseUrl}/details/${hotelId}/reviews`, true)
    }
}

export default HotelData