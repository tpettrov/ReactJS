/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {

    render(){

        let book = this.props.book


        if (this.props.homePageCall) {

            return (
                <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.date.toLocaleDateString()}</td>
                    <td><Link to={'/books/' + book.id}>Details</Link></td>
                </tr>
            )

        } else {


            return (
                <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.date.toLocaleDateString()}</td>
                    <td><Link to={'/books/' + book.id}>Details</Link></td>
                </tr>
            )
        }


    }

}

export default Book