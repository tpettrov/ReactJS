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



}

export default PetData