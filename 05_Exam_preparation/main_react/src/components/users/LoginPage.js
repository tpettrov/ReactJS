/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import LoginForm from './LoginForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import Auth from './Auth'
import toastr from 'toastr'
import HandleHelper from '../common/HandleHelper'

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

        HandleHelper.handle.bind(this)(event, 'user')

    }

    handleLoginForm(event) {

        event.preventDefault()

        if (!this.validateUser()) {

            return
        }

        userActions.login(this.state.user)

    }

    handleUserLogged(data){

        if (!data.success) {

            let firstError = data.message

            if (data.errors) {
                firstError = HandleHelper.parseErrorMessage(data)
            }


            this.setState({
                error: firstError
            })

        } else {
            Auth.saveUser(data.user)
            Auth.authenticateUser(data.token)
            toastr.success(data.message)
            this.props.history.push('/')

        }
    }


    validateUser() {


        const user = this.state.user
        let formIsValid = true
        let error = ''

        if (user.email.length === 0) {

            error = 'Please provide name email. React'

            formIsValid = false

        }

        if (user.password.length === 0) {

            error = 'Please provide password. React '

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

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