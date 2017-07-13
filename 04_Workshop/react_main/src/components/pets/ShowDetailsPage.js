/**
 * Created by apetrov on 7/13/2017.
 */
import React, {Component} from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import AddCommForm from '../../components/comments/AddCommForm'
import toastr from 'toastr'
import HandleHelper from '../common/HandleHelper'

class ShowDetailsPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            pet: {},
            petId: this.props.match.params.id,
            commentToAdd: {

                message: ''
            }

        }

        this.handleLoadedPet = this.handleLoadedPet.bind(this)
        this.handleCommentAdded = this.handleCommentAdded.bind(this)

        petStore.on(petStore.eventTypes.PET_CREATED,
        this.handleLoadedPet)

        petStore.on(petStore.eventTypes.COMMENT_ADDED,
            this.handleCommentAdded)

    }

    componentWillMount(){

        this.getPet()

    }

    componentWillUnmount(){

        petStore.removeListener(
            petStore.eventTypes.PET_CREATED,
            this.handleLoadedPet
        )

        petStore.removeListener(
            petStore.eventTypes.COMMENT_ADDED,
            this.handleCommentAdded()
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

    handleAddCommentForm(event){

        event.preventDefault()
        petActions.addComment(this.state.commentToAdd, this.state.petId)


    }

    handleCommentChange(event){

        HandleHelper.handle.bind(this)(event, 'commentToAdd')
    }

    handleCommentAdded(data) {

        if (!data.success) {

            toastr.error(!data.message)

        } else {



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

                <AddCommForm onClick={this.handleAddCommentForm.bind(this)} onChange={this.handleCommentChange.bind(this)} />
            </div>
        )

    }


}

export default ShowDetailsPage