/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListPagePets from '../pets/ListPagePets'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import AddPetPage from '../pets/AddPetPage'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={ListPagePets}/>
        <Route exact path="/users/register" component={RegisterPage}/>
        <Route exact path="/users/login" component={LoginPage}/>
        <PrivateRoute path="/users/logout" component={LogoutPage} />
        <PrivateRoute path="/pets/create" component={AddPetPage} />
    </Switch>

)

export default Routes