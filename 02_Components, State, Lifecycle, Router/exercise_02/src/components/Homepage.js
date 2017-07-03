/**
 * Created by Toni on 7/2/2017.
 */
import React, {Component} from 'react'
import data from '../data'
import Book from './Book'

class HomePage extends Component {

    constructor (props) {

        super(props)

        this.state = {

            books: []
        }
    }

    componentDidMount() {

        data.getBooks()
            .then( (receivedBooks) =>{

                 this.setState({
                     books: receivedBooks
                 })
            })
    }


    render(){

        let indexBooks = this.state.books.slice(0, 6)
            .sort(function (a,b){

                return b.date - a.date

            })
            .map( book => (

            <Book key ={book.id} homePageCall = {true} book = {book}/>
        ))

        return (
            <div>
            <h1> Last 6 books </h1>
                <table>
                    {indexBooks}
                </table>
            </div>
        )






    }

}

export default HomePage