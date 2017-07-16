/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreateCarsPage from '../cars/CreateCarsPage'
import CarsListPage from '../cars/CarsListPage'
import CarDetailsPage from '../cars/CarDetailsPage'
import UsersCars from '../cars/UsersCars'



const Routes = () => (

    <Switch>
        <Route exact path="/" component={CarsListPage}/>
        <Route exact path="/users/register" component={RegisterPage}/>
        <Route exact path="/users/login" component={LoginPage}/>
        <PrivateRoute path="/users/logout" component={LogoutPage} />
        <PrivateRoute path="/cars/create" component={CreateCarsPage} />
            <PrivateRoute path="/cars/details/:id" component={CarDetailsPage} />
            <PrivateRoute path="/cars/mine" component={UsersCars} />

    </Switch>

)

export default Routes