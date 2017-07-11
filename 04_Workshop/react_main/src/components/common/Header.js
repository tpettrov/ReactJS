/**
 * Created by apetrov on 7/11/2017.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends  Component {

    render(){


        return (

            <table>
                <thead>

                <tr>
                    <td>
                        <Link to={'/'}>Home</Link>
                    </td>
                    <td>
                        <Link to={'/users/register'}>Register</Link>
                    </td>
                    <td>
                        <Link to={'/users/login'}>Login</Link>
                    </td>

                </tr>
                </thead>




            </table>


        )

    }


}

export default Header