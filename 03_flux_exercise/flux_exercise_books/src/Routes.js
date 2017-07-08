/**
 * Created by Toni on 7/2/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BookListHome from './components/BookListHome'
import AllBooks from './components/AllBooks'
// import Book from './components/Book'
import CreateBookForm from './components/forms/createBook'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={BookListHome} />
        <Route exact path="/books/all" component={AllBooks} />
        <Route exact path="/books/create"  component={CreateBookForm}  />
    </Switch>

)

export default Routes