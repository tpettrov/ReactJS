/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import queryString from 'query-string'


class ListPagePets extends Component {

    constructor(props){

        super(props)

        const query = queryString.parse(this.props.location.search)
        const page = parseInt(query.page, 10) || 1

        this.state = {

            page: page,
            pets: [],


        }

        this.handleLoadedPets = this.handleLoadedPets.bind(this)

        petStore.on(petStore.eventTypes.PETS_LOADED,
        this.handleLoadedPets
        )


    }

    componentDidMount(){

        this.getPets(this.state.page)

    }

    componentWillUnmount(){

        petStore.removeListener(
            petStore.eventTypes.PETS_LOADED,
            this.handleLoadedPets
        )
    }

    getPets(page){

        petActions.get(page)
    }

    handleLoadedPets(data){

        this.setState({pets: data})

    }

    goPrevPage () {

        let page = this.state.page
        if(page !== 1) {

            page--
        }


        this.setState({page})

        this.props.history.push(`/?page=${page}`)
        petActions.get(page)


    }


    goNextPage () {

        let page = this.state.page

        if(this.state.pets.length === 0) {

            return
        }

        page++

        this.setState({page})
        petActions.get(page)
        this.props.history.push(`/?page=${page}`)

    }


    render() {



        let pets = this.state.pets.map(pet => {

            return <li key={pet.id}>{pet.name}</li>
        })

        let msg = ''

        if(this.state.pets.length === 0) {

             msg = 'Sorry no more pets'
        }


        return (

            <div>
                <h1> List Pets Page</h1>
                <ul>
                    {pets}
                    {msg}
                </ul>

                <div>
                    <button onClick={this.goPrevPage.bind(this)}>Prev</button>
                    <button onClick={this.goNextPage.bind(this)}>Next</button>
                </div>


            </div>



        )

    }


}

export default ListPagePets