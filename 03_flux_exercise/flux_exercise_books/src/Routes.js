/**
 * Created by Toni on 7/2/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BookListHome from './components/BookListHome'
import AllBooks from './components/AllBooks'
// import Book from './components/Book'
import CreateBookPage from './components/CreateBookPage'
import EditBookPage from './components/EditBookPage'
import RegistrationPage from './components/RegistrationPage'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={BookListHome} />
        <Route exact path="/books/all" component={AllBooks} />
        <Route exact path="/books/create"  component={CreateBookPage}  />
        <Route exact path="/books/edit/:id"  component={EditBookPage}  />
        <Route exact path="/user/register"  component={RegistrationPage}  />
    </Switch>

)

export default Routes