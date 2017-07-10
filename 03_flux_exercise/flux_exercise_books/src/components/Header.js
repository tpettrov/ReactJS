/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    render(){

        return (
            <table>
                <thead>

                <tr>
                    <td>
                        <Link to={'/'}>Home</Link>
                    </td>
                    <td>
                        <Link to={'/books/all'}>All Books</Link>
                    </td>
                    <td>
                        <Link to={'/authors/all'}>All authors</Link>
                    </td>
                    <td>
                        <Link to={'/books/create'}>Create Book</Link>
                    </td>
                    <td>
                        <Link to={'/user/register'}>Register User</Link>
                    </td>
                    <td>
                        <Link to={'/user/login'}>Login User</Link>
                    </td>
                </tr>
                </thead>




            </table>



        )
    }

}

export default Header