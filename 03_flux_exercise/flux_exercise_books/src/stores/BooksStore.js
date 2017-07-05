/**
 * Created by Toni on 7/5/2017.
 */
import {EventEmitter} from 'events'
import DB from '../data.js'
import dispatcher from '../dispatcher'

class BooksStore extends EventEmitter {

    constructor() {

        super()

        this.books = DB
        this.currentPage = 1
        this.pageSize = 3

    }

    getBooks() {

       return new Promise((resolve, reject) => {

           this.getAllBooks().then((allBooks) => {

               const pageSize = this.pageSize
               const currentPage = this.currentPage

               const indexOfLastTodo = currentPage * pageSize;
               const indexOfFirstTodo = indexOfLastTodo - pageSize;

               let booksForPage = allBooks.slice(indexOfFirstTodo, indexOfLastTodo)

               resolve (booksForPage)


           })
       })



    }

    getAllBooks(){

        return this.books.getBooks()

    }


    showNextPage () {

        let newPage = this.currentPage + 1
        this.currentPage = newPage
        this.emit('change')
    }

    showPreviousPage () {

        let newPage = this.currentPage - 1
        this.currentPage = newPage
        this.emit('change')
    }




    handleAction (action) {
        switch (action.type) {
            case 'NEXT_PAGE': {
                this.showNextPage()
                break
            }
            case 'PREVIOUS_PAGE': {
                this.showPreviousPage()
                break
            }
            default: break
        }
    }


}

let bookStore = new BooksStore()

dispatcher.register(bookStore.handleAction.bind(bookStore))


export default bookStore
