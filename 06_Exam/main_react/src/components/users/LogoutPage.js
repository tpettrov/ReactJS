/**
 * Created by Toni on 7/11/2017.
 */
import {Component} from 'react'
import Auth from './Auth'
import toastr from 'toastr'

class LogoutPage extends Component {


    componentWillMount(){

        Auth.deauthenticateUser()
        Auth.removeUser()
        toastr.success('Goodbye.')
        this.props.history.push('/users/login')

    }

    render() {

        return null






    }

}

export default LogoutPage