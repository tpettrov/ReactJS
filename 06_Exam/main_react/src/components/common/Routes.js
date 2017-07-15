/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'


const Routes = () => (

    <Switch>
        <Route exact path="/" component={RegisterPage}/>
        <Route exact path="/users/register" component={RegisterPage}/>
        <Route exact path="/users/login" component={LoginPage}/>
        <PrivateRoute path="/users/logout" component={LogoutPage} />

    </Switch>

)

export default Routes