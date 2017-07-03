/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'
import data from '../data'
import Book from './Book'

class AllBooksPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            books: [],
            page: 1,
            sort: '',
            pageSize: 3

        }

        this.sortFunction = this.sortFunction.bind(this)
    }


    componentDidMount() {

        data.getBooks()
            .then((receivedBooks) => {

                this.setState({
                    books: receivedBooks,
                })
            })


    }


    sortFunction(a, b) {


        switch (this.state.sort) {

            case 'date':
                return b.date - a.date
            case 'author':
                return a.author > b.author
            case 'title':
                return a.title > b.title
            default:
                return

        }

    }


    render() {


        let buttons = (

            <div>
                <button id="title" onClick={() => this.setState({sort: 'title'})}>By Title</button>
                <button id="author" onClick={() => this.setState({sort: 'author'})}>By Author</button>
                <button id="date" onClick={() => this.setState({sort: 'date'})}>By Date</button>
            </div>
        )


        let prevButton = ''
        let nextButton = ''

        if (this.state.page > 1) {

            prevButton = (

                <button id="PrevPage" onClick={() => this.setState((prevState) => {
                    return {page: prevState.page - 1}
                })}>Prev Page</button>

            )
        }
        if (this.state.page < this.state.books.length  / this.state.pageSize) {

            nextButton = (

                <button id="NextPage" onClick={() => this.setState((prevState) => {
                    return {page: prevState.page + 1}
                })}>Next Page</button>

            )
        }

        const indexOfLastTodo = this.state.page * this.state.pageSize;
        const indexOfFirstTodo = indexOfLastTodo - this.state.pageSize;


        let indexBooks = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo)
            .sort(this.sortFunction)
            .map(book => (

                <Book key={book.id} homePageCall="true" book={book}/>
            ))

        return (
            <div>
                <h1> All Books </h1>
                {buttons}
                <table>
                    {indexBooks}
                </table>

                {prevButton}{nextButton}
            </div>
        )


    }

}

export default AllBooksPage