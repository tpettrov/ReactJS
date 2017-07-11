/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListPagePets from '../pets/ListPagePets'


const Routes = () => (

    <Switch>
        <Route exact path="/" component={ListPagePets} />

    </Switch>

)

export default Routes