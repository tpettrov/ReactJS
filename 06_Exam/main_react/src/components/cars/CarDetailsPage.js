/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import CarReviews from './likesAndReviews/CarReviews'
import Likes from './likesAndReviews/Likes'

class CarDetailsPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            carId: this.props.match.params.id,
            car: {}


        }
        this.handleLoadedCar = this.handleLoadedCar.bind(this)

        carStore.on(carStore.eventTypes.CAR_BY_ID_LOADED,
            this.handleLoadedCar)


    }


    componentDidMount(){

        carActions.getCarById(this.state.carId)

    }

    componentWillUnmount(){

        carStore.removeListener(carStore.eventTypes.CAR_BY_ID_LOADED,
            this.handleLoadedCar)
    }


    handleLoadedCar(data) {

        //good to check if authorization is OK

        this.setState({
            car: data

        })
    }


    render(){

        let car = this.state.car

        return (
            <div>
                <h1>Details page:</h1>

                <img src={car.image} alt="car"/>
                <h1>{car.make}</h1>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Price: {car.price}</p>
                <h2>Add some LIKES</h2>
                <Likes likes = {car.likes} carId = {this.state.carId}/>
                <h2>Add some reviews</h2>
                <CarReviews carId = {this.state.carId} />
            </div>
        )
    }

}

export default CarDetailsPage