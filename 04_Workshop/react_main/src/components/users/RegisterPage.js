/**
 * Created by apetrov on 7/11/2017.
 */
import React, {Component} from 'react'
import RegisterForm from './RegisterForm'

class RegisterPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

            user: {

                email: 'test@test.bg',
                password: '123',
                name: 'test'

            },

            error: ''


        }

    }

    handleUserRegistration(event) {

        event.preventDefault()

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
                    onSave={this.handleUserRegistration.bind(this)}
                />
            </div>
        )

    }

}

export default RegisterPage