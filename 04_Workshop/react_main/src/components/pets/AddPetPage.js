/**
 * Created by Toni on 7/12/2017.
 */
import React, { Component } from 'react'
import AddPetForm from '../pets/AddPetForm'
import HandleHelper from '../common/HandleHelper'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import toastr from 'toastr'

class AddPetPage extends Component {

    constructor(props){

        super(props)

        this.state = {

            pet: {
                name: 'Djeki',
                age: '10',
                image: '',
                type: 'Dog'

            },

            error: ''

        }

        this.petCreationHandler = this.petCreationHandler.bind(this)

        petStore.on(petStore.eventTypes.PET_CREATED,
        this.petCreationHandler
        )

    }

    petChangeHandler(event){

        HandleHelper.handle.bind(this)(event, 'pet')

    }

    petFormSaveHandler(event){

        event.preventDefault()

        //add some validation in free time
        petActions.create(this.state.pet)


    }

    petCreationHandler(data) {

        if (!data.success) {

            this.setState({
                error: data.message
            })

        } else {

            toastr.success('Pet added.')
            this.props.history.push('/')

        }
    }

    componentWillUnmount(){

        petStore.removeListener(
            petStore.eventTypes.PET_CREATED,
            this.petCreationHandler)


    }


    render(){


        return (


            <div>
                <h1>Add Pet</h1>
                <AddPetForm
                    pet={this.state.pet}
                    onChange = {this.petChangeHandler.bind(this)}
                    onSave = {this.petFormSaveHandler.bind(this)}
                    error = {this.state.error}
                />
            </div>

        )


    }

}

export default AddPetPage