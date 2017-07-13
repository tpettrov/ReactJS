/**
 * Created by apetrov on 7/13/2017.
 */
import React, {Component} from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class ShowDetailsPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            pet: {},
            petId: this.props.match.params.id

        }

        this.handleLoadedPet = this.handleLoadedPet.bind(this)

        petStore.on(petStore.eventTypes.PET_CREATED,
        this.handleLoadedPet)

    }

    componentWillMount(){

        this.getPet()

    }

    componentWillUnmount(){

        petStore.removeListener(
            petStore.eventTypes.PET_CREATED,
            this.handleLoadedPet
        )

    }

    getPet(){

        petActions.getPetbyId(this.state.petId)


    }

    handleLoadedPet(data) {

        console.log(data)

    }


    render(){


        return (

            <div>
                <h1>This is Details Page</h1>
            </div>
        )

    }


}

export default ShowDetailsPage