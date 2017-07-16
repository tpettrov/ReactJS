/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carActions from '../../../actions/CarActions'
import carStore from '../../../stores/CarStore'
import toastr from 'toastr'

class DeleteBtn extends Component {

    constructor(props) {

        super(props)


        this.handleDeletedCar = this.handleDeletedCar.bind(this)

        carStore.on(carStore.eventTypes.CAR_DELETED,
            this.handleDeletedCar)
    }

    componentWillUnmount() {

        carStore.removeListener(carStore.eventTypes.CAR_DELETED,
            this.handleDeletedCar)


    }




    handleDeletedCar(data) {

        if (!data.success) {

            toastr.error(data.message)

        } else {

            carActions.getUserCars()


        }

    }

    handleDeleteCar(event) {

        event.preventDefault()
        carActions.delete(this.props.carId)

    }


    render() {


        return (

            <form>

                <input type='submit' onClick={this.handleDeleteCar.bind(this)} value="Delete"/>

            </form>

        )

    }


}

export default DeleteBtn