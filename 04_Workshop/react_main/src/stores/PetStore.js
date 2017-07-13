/**
 * Created by Toni on 7/12/2017.
 */
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import petActions from '../actions/PetActions'
import petData from '../data/PetData'


class PetStore extends EventEmitter {


    create(pet) {

        petData.create(pet).then(data => this.emit(this.eventTypes.PET_CREATED, data))   //emits change (registration) and sends the data with the emit

    }

    get(page) {

        petData.get(page).then(data => this.emit(this.eventTypes.PETS_LOADED, data))

    }




    handleAction(action) {

        switch (action.type) {

            case petActions.types.CREATE_PET: {

                this.create(action.pet)
                break
            }

            case petActions.types.GET_PETS: {

                this.get(action.page)
                break
            }

            default:
                break


        }




    }


}

let petStore = new PetStore()
petStore.eventTypes = {

    PET_CREATED: 'pet_created',
    PETS_LOADED: 'pets_loaded'

}

dispatcher.register(petStore.handleAction.bind(petStore))
export default petStore