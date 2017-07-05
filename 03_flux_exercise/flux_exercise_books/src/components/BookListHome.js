/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'

import Book from './Book'
import BookStore from '../stores/BooksStore'

class BookListHome extends Component {

    constructor(props) {

        super(props)

        this.state = {

            books: []
        }

        // BookStore.on('change', () => {
        //     this.getSixBooks()
        // })


    }

    componentDidMount() {

        this.getSixBooks()
    }

    getSixBooks() {

        BookStore.getAllBooks().then((receivedBooks) => {

            let sixBooks = receivedBooks.slice(0, 6).sort((a,b) => {

                return b.date - a.date
            })
            this.setState({books: sixBooks})

        })


    }


    render() {

        const {books} = this.state
        const bookElements = books.map(book => (

            <Book key={book.id} {...book}/>
        ))

        return (
            <div>
                <h1> Last 6 books </h1>
                <ul>
                    {bookElements}
                </ul>
            </div>
        )


    }

}

export default BookListHome