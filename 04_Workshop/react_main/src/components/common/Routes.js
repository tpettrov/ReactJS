/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListPetsPage from '../pets/ListPetsPage'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import AddPetPage from '../pets/AddPetPage'
import ShowDetailsPage from '../pets/ShowDetailsPage'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={ListPetsPage}/>
        <Route exact path="/users/register" component={RegisterPage}/>
        <Route exact path="/users/login" component={LoginPage}/>
        <PrivateRoute path="/users/logout" component={LogoutPage} />
        <PrivateRoute path="/pets/create" component={AddPetPage} />
            <PrivateRoute path="/pets/details/:id" component={ShowDetailsPage} />
    </Switch>

)

export default Routes