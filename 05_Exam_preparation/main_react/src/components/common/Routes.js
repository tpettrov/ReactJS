/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import HotelListPage from '../hotels/HotelListPage'
import CreateHotelPage from '../hotels/CreateHotelPage'

import HotelDetailsPage from '../hotels/HotelDetailsPage'

const Routes = () => (

    <Switch>
        <Route exact path="/" component={HotelListPage}/>
        <Route exact path="/users/register" component={RegisterPage}/>
        <Route exact path="/users/login" component={LoginPage}/>
        <Route exact path="/hotels/all/" component={HotelListPage} />
        <PrivateRoute path="/users/logout" component={LogoutPage} />
        <PrivateRoute path="/hotels/create" component={CreateHotelPage} />
        <PrivateRoute  path="/hotels/details/:id" component={HotelDetailsPage} />


    </Switch>

)

export default Routes