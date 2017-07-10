import React, {Component} from 'react'
import userActions from '../actions/UserActions'
import RegistrationForm from '../components/forms/RegistrationForm'


class RegistrationPage extends Component {

    constructor(props){

        super(props)

        this.state = {
            
            user:   {

                username: 'Ivan',
                password: '123'
            }

        }
    

    }
    
    handleRegisterUser (event) {

        event.preventDefault()

        userActions.registerUser(this.state.user)
        
        
    }


    handleUserChange (event) {
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
                <h1> Register new user </h1>
           
                <RegistrationForm
                onClick = {this.handleRegisterUser.bind(this)}
                onChange = {this.handleUserChange.bind(this)}
                user = {this.state.user} />
                
            </div>
          

        )

    }


}

export default RegistrationPage