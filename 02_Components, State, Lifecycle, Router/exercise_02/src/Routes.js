/**
 * Created by Toni on 7/2/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/Homepage'
import AllBooksPage from './components/AllBooksPage'
import Book from './components/Book'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/books/all" component={AllBooksPage} />
        <Route exact path="/books/:id"  component={Book}  />
    </Switch>

)

export default Routes