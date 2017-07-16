/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carActions from '../../../actions/CarActions'

class DeleteBtn extends Component {


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