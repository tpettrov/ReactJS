/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import {Link} from 'react-router-dom'
import DeleteBtn from '../cars/likesAndReviews/DeleteBtn'
import toastr from 'toastr'

class UsersCars extends Component {

    constructor(props){

        super(props)

        this.state = {

            cars: []

        }

        this.handleLoadedUserCars = this.handleLoadedUserCars.bind(this)


        this.handleDeletedCar = this.handleDeletedCar.bind(this)

        carStore.on(carStore.eventTypes.CAR_DELETED,
            this.handleDeletedCar)

        carStore.on(carStore.eventTypes.USER_CARS_LOADED,
        this.handleLoadedUserCars)



    }


    componentDidMount(){


        this.getUsersCars()

    }

    componentWillUnmount(){

        carStore.removeListener(carStore.eventTypes.USER_CARS_LOADED,
            this.handleLoadedUserCars)

        carStore.removeListener(carStore.eventTypes.CAR_DELETED,
            this.handleDeletedCar)


    }

    getUsersCars(){

        carActions.getUserCars()

    }

    handleLoadedUserCars(cars){

       this.setState({cars})

    }

    handleDeletedCar(data) {

        if (!data.success) {

            toastr.error(data.message)

        } else {

            toastr.error(data.message)
            carActions.getUserCars()


        }

    }



    render(){



        let cars = this.state.cars.map( (car) => {

            return <div key={car.id}>
                <h1>{car.make}</h1>

                <Link to={`/cars/details/${car.id}`}>
                    Click on image for details:
                    <img src={car.image} alt="car"/></Link>
                    <DeleteBtn carId={car.id} />
            </div>
        })

        if (cars.length === 0) {

            cars = "You don't own cars"
        }

        return (

            <div>
                <h1>Profile Page or Your own cars</h1>
                {cars}
            </div>
        )


    }


}

export default UsersCars