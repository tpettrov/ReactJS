/**
 * Created by Toni on 7/12/2017.
 */
import data from './Data'
const baseUrl = 'pets'

class PetData {

    static create(pet) {

        return data.post(`${baseUrl}/create`, pet, true)
    }

    static get(page) {
        page = page || 1
        return data.get(`${baseUrl}/all?page=${page}`, true)
    }

    static getById(id) {

        return data.get(`${baseUrl}/details/${id}`, true)
    }

    static addComment(comment, id) {

        return data.post(`${baseUrl}/details/${id}/comments/create`,comment, true)
    }

    static getComments(id) {

        return data.get(`${baseUrl}/details/${id}/comments`, true)

    }


}

export default PetData