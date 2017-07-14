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

    getById(id) {

        petData.getById(id).then(data => this.emit(this.eventTypes.PET_CREATED, data))

    }

    addPetComment(comment, id) {

        petData.addComment(comment, id).then(data => this.emit(this.eventTypes.COMMENT_ADDED, data))

    }

    getPetComments(id) {

        petData.getComments(id).then(data => this.emit(this.eventTypes.COMMENTS_LOADED, data))

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

            case petActions.types.GET_PET_BY_ID: {

                this.getById(action.id)
                break
            }

            case petActions.types.ADD_COMMENT: {

                this.addPetComment(action.comment, action.id)
                break
            }

            case petActions.types.GET_COMMENTS: {

                this.getPetComments(action.id)
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
    PETS_LOADED: 'pets_loaded',
    PET_LOADED: 'pet_loaded',
    COMMENT_ADDED: 'comment_added',
    COMMENTS_LOADED: 'comments_loaded'

}

dispatcher.register(petStore.handleAction.bind(petStore))
export default petStore