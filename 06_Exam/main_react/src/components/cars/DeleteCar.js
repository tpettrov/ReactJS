/**
 * Created by Toni on 7/16/2017.
 */
import {Component} from 'react'
import toastr from 'toastr'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'



class DeleteCar extends Component {


    componentWillMount(){


        carActions.delete(this.props.match.params.id)
        this.props.history.push('/cars/mine')

    }

    render() {

        return null

    }

}

export default DeleteCar