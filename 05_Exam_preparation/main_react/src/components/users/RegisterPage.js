/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'
import HandleHelper from '../common/HandleHelper'

class RegisterPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

            user: {
                name: 'test',
                email: 'test@test.bg',
                password: '1234'


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

        if (!data.success) {

            let firstError = data.message

            if (data.errors) {
                firstError = HandleHelper.parseErrorMessage(data)
            }


            this.setState({
                error: firstError
            })

        } else {


            toastr.success(data.message)
            this.props.history.push('/users/login')

        }


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

            error = 'Password should be more than 4 symbols. React'

            formIsValid = false

        }

        if (user.name.length === 0) {

            error = 'Please provide name. React '

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

    }


    handleUserChange(event) {

        HandleHelper.handle.bind(this)(event, 'user')

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