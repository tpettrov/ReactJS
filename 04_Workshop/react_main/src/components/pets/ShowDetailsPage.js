/**
 * Created by apetrov on 7/13/2017.
 */
import React, {Component} from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import AddCommForm from '../../components/comments/AddCommForm'
import toastr from 'toastr'

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

       if (!data) {


           toastr.error('Ebasi')


       } else {

           this.setState({pet: data})
           toastr.success('Pet loaded')

       }

    }


    render(){

        let pet = this.state.pet

        return (

            <div>
                <h1>This is Details Page</h1>

                {pet.id}
                {pet.url}
                {pet.type}
                {pet.name}

                <AddCommForm />
            </div>
        )

    }


}

export default ShowDetailsPage