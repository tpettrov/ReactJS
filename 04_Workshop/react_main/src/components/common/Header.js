/**
 * Created by apetrov on 7/11/2017.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import userStore from '../../stores/UserStore'

class Header extends  Component {

    constructor(props){

        super(props)

        this.state = {

            username: Auth.getUser().name
        }

        this.handleUserLogin = this.handleUserLogin.bind(this)

        userStore.on(userStore.eventTypes.USER_LOGGED,
           this.handleUserLogin
        )

    }

    handleUserLogin(data) {

        if (data.success) {

            this.setState({

                username: data.user.name

            })

        }

    }

    render(){


        return (

            <div>
                        <Link to={'/'}>Home</Link>


                    {Auth.isUserAuthenticated() ? (

                        <div>
                            <span>Welcome, {this.state.username}</span>
                        <Link to='/users/logout'>Logout</Link>
                            <Link to='pets/create'>Add Pet</Link>
                        </div>

                    ) : (

                        <span>

                        <Link to='/users/register'>Register</Link>



                    <Link to='/users/login'>Login</Link>

                        </span>

                    )}



            </div>


        )

    }


}

export default Header