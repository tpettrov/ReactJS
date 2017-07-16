/**
 * Created by Toni on 7/16/2017.
 */
import React from 'react'
import Input from '../common/Input'

const Search = (props) =>{


    return (

        <form>
            <Input
                name='search'
                placeholder='Search'
                onChange = {props.onChange}
                value = {props.search}
            />

            <input type="submit" value="Search" onClick={props.onClick}/>
        </form>

    )

}