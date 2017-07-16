/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import queryString from 'query-string'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import { Link } from 'react-router-dom'
import StatsComponent from './stats/StatsComponent'


class CarsListPage extends Component {

    constructor(props) {

        super(props)

        const query = queryString.parse(this.props.location.search)
        const page = parseInt(query.page, 10) || 1

        this.state = {

            cars: [],
            page: page || 1,

        }

        this.handleCarsLoaded = this.handleCarsLoaded.bind(this)

        carStore.on(carStore.eventTypes.CARS_LOADED,
        this.handleCarsLoaded)

    }

    componentDidMount(){

        this.getCars()

    }

    componentWillUnmount(){

        carStore.removeListener(carStore.CARS_LOADED,
            this.handleCarsLoaded)

    }

    getCars(){

        carActions.get(this.state.page)

    }

    handleCarsLoaded(data){

        // good to handle empty GET

        let cars = data

        this.setState({cars})
    }

    loadNextCars() {

        if (this.state.cars.length === 0) {
            return
        }

        let page = this.state.page
        page++
        this.setState({page})
        carActions.get(page)
        this.props.history.push(`/?page=${page}`)


    }


    loadPrevCars() {

        let page = this.state.page
        if (page === 1) {
            return
        }

        page--
        this.setState({page})
        carActions.get(page)
        this.props.history.push(`/?page=${page}`)


    }



    render() {

//good to have cars Listing Component
        let cars = this.state.cars.map(car => {

            return <div key={car.id}>
                <h1>{car.make}</h1>

                <Link to={`/cars/details/${car.id}`}>
                    Click on image for details:
                    <img src={car.image} alt="car"/></Link>

            </div>


        })

        if (cars.length === 0) {

            cars = <p>No more cars!</p>
        }


        return (

            <div>
                <StatsComponent/>
                <h1>Car list page</h1>
                {cars}
                <button onClick={this.loadPrevCars.bind(this)}>PREV</button>
                <button onClick={this.loadNextCars.bind(this)}>NEXT</button>
            </div>

        )


    }


}

export default CarsListPage