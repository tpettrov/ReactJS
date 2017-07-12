/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class ListPagePets extends Component {

    constructor(props){

        super(props)


        this.state = {

            page: 1,
            pets: []

        }

        this.handleLoadedPets = this.handleLoadedPets.bind(this)

        petStore.on(petStore.eventTypes.PETS_LOADED,
        this.handleLoadedPets
        )


    }

    componentWillMount(){

        this.getPets()

    }

    getPets(){

        petActions.get()
    }

    handleLoadedPets(data){

        console.log(data)
    }


    render() {


        return (

            <h1> List Pets Page</h1>


        )

    }


}

export default ListPagePets