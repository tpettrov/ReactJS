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

            <div className="header">

                        <Link to={'/'}>Home | </Link>
                <Link to={'/hotels/all/'}>All Hotels</Link>
                    {Auth.isUserAuthenticated() ? (

                        <span>
                            <p>Welcome, {this.state.username}</p>
                       <Link to='/users/logout'>Logout</Link>
                            <div><Link to='/hotels/create'>Create Hotel</Link></div>
                        </span>

                    ) : (

                        <span>
                        <p><Link to='/users/register'>Register</Link></p>

                        <Link to='/users/login'>Login</Link>
                        </span>
                    )}



            </div>


        )

    }


}

export default Header