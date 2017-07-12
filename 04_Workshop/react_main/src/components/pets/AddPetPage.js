/**
 * Created by Toni on 7/12/2017.
 */
import React, { Component } from 'react'
import AddPetForm from '../pets/AddPetForm'

class AddPetPage extends Component {

    constructor(props){

        super(props)

        this.state = {

            pet: {
                name: 'Djeki',
                age: '10',
                url: '',
                type: 'dog'

            },

            error: ''

        }

    }


    render(){


        return (


            <div>
                <h1>Add Pet</h1>
                <AddPetForm
                    pet={this.state.pet}
                    //onChange = {}
                    //onSave = {}
                />
            </div>

        )


    }

}

export default AddPetPage