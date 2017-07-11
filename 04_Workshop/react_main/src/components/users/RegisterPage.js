/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class RegisterPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

            user: {
                name: 'test',
                email: 'test@test.bg',
                password: ''


            },

            error: ''

        }

        this.handleUserRegistration = this.handleUserRegistration.bind(this)

        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }

    componentWillUnmount() {

        userStore.removeListener(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration)


    }


    handleUserRegistration(data) {


        console.log(data)


    }

    handleUserForm(event) {

        event.preventDefault()

        if (!this.validateUser()) {

            return
        }

        userActions.register(this.state.user)

    }

    validateUser() {


        const user = this.state.user
        let formIsValid = true
        let error = ''

        if (user.password.length <= 3) {

            error = 'Password should be more than 4 symbols '

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

    }


    handleUserChange(event) {

        const target = event.target
        const field = target.name
        const value = target.value

        const user = this.state.user

        user[field] = value

        this.setState({user})

    }


    render() {


        return (
            <div>
                <h1>This is Register Page.</h1>
                <RegisterForm
                    user={this.state.user}
                    onChange={this.handleUserChange.bind(this)}
                    error={this.state.error}
                    onSave={this.handleUserForm.bind(this)}
                />
            </div>
        )

    }

}

export default RegisterPage