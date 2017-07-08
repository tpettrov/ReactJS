/**
 * Created by Toni on 7/5/2017.
 */
import React, {Component} from 'react'

import Book from './Book'
import BooksStore from '../stores/BooksStore'
import AllBooksActions from '../actions/AllBooksActions'

class AllBooks extends Component {

    constructor(props) {

        super(props)

        this.state = {
            books: []

        }

        BooksStore.on('change', () => {
            this.getBooks()
        })


    }

    componentDidMount() {

        this.getBooks()

    }



    getBooks() {

        BooksStore.getBooks().then((receivedBooks) => {

            this.setState({books: receivedBooks})

        })


    }

    showNextPage (event) {
        event.preventDefault()
        AllBooksActions.showNextPage()

    }

    showPreviousPage (event) {
        event.preventDefault()
        AllBooksActions.showPreviousPage()
    }


    render() {

        const {books} = this.state

        const bookElements = books.map(book => (

            <Book key={book.id} {...book}/>
        ))

        return (
            <div>
                <h1> All books </h1>
                <ul>
                    {bookElements}
                </ul>


                <button onClick={this.showPreviousPage.bind(this)}>Previous Page</button>
                <button onClick={this.showNextPage.bind(this)}>Next Page</button>

            </div>
        )


    }

}

export default AllBooks