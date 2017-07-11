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
                        <Link to={'/user/register'}>Register</Link>
                    </td>
                    <td>
                        <Link to={'/user/login'}>Login</Link>
                    </td>

                </tr>
                </thead>




            </table>


        )

    }


}

export default Header