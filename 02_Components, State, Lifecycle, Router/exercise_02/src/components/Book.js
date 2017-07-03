/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import data from '../data'
import Comment  from './Comment'

class Book extends Component {


    constructor (props) {

        super(props)

        this.state = {

            bookSingle: {}
        }
    }

    componentDidMount() {

        if (!this.props.homePageCall) {

            let bookId = this.props.match.params.id

            data.getBooks()
                .then((receivedBooks) => {

                    this.setState({
                        bookSingle: receivedBooks.find((book) => {

                            return book.id == bookId
                        })
                    })
                })
        }

    }


    render() {

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

            let bookSingle = this.state.bookSingle

            // console.log(bookSingle.comments)
            //
            // let comments = bookSingle.comments.map( comment => {
            //
            //     <Comment key ={comment.id} comment = {comment}/>
            // })

            return (

                <div>

                    <h1>Single Book Preview</h1>
                    Title:  <p>{bookSingle.title}</p>
                    Author: <p>{bookSingle.author}</p>

                    {/*Comments: {comments}*/}

                </div>

            )


        }


    }

}

export default Book