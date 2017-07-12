/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import LoginForm from './LoginForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import Auth from './Auth'
import toastr from 'toastr'

class LoginPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            user: {
                email: 'test@test.bg',
                password: '1234'
            },

            error: ''


        }

        this.handleUserLogged = this.handleUserLogged.bind(this)

        userStore.on(userStore.eventTypes.USER_LOGGED,
            this.handleUserLogged)

    }

    componentWillUnmount() {

        userStore.removeListener(
            userStore.eventTypes.USER_LOGGED,
            this.handleUserLogged)


    }


    // can be GENERIC function if left time
    handleUserChange(event) {

        const target = event.target
        const field = target.name
        const value = target.value
        const user = this.state.user
        user[field] = value
        this.setState({user})

    }

    handleLoginForm(event) {

        event.preventDefault()
        userActions.login(this.state.user)

    }

    handleUserLogged(data){

        if (!data.success) {

            this.setState({

                error: data.message
            })

        } else {
            Auth.saveUser(data.user)
            Auth.authenticateUser(data.token)
            toastr.success(data.message)
            this.props.history.push('/')

        }
    }


    render() {


        return (

            <div>
                <h1>Login with your credentials</h1>
                <LoginForm
                    user={this.state.user}
                    onChange={this.handleUserChange.bind(this)}
                    error={this.state.error}
                    onSave={this.handleLoginForm.bind(this)}
                />

            </div>



        )

    }


}

export default LoginPage