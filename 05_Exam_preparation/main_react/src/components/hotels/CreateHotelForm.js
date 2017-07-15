/**
 * Created by Toni on 7/15/2017.
 */
import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => {

    return (
        <form>
            <div>{props.error}</div>
            <Input
                name='name'
                placeholder='Hotel Name'
                onChange = {props.onChange}
                value = {props.hotel.name}
            />
            <Input
                name='location'
                placeholder='Hotel Location'
                onChange = {props.onChange}
                value = {props.hotel.location}
            />
            <Input
                name='description'
                placeholder='Hotel Description'
                onChange = {props.onChange}
                value = {props.hotel.description}
            />
            <Input
                name='numberOfRooms'
                type="number"
                placeholder='Hotel number rooms'
                onChange = {props.onChange}
                value = {props.hotel.numberOfRooms}
            />
            <Input
                name='image'
                placeholder='Image url'
                onChange = {props.onChange}
                value = {props.hotel.image}
            />
            <Input
                name='parkingSlots'
                type="number"
                placeholder='Parking Slots'
                onChange = {props.onChange}
                value = {props.hotel.parkingSlots}
            />
            <input type="submit" value="Create Hotel" onClick={props.onSave}/>
        </form>


    )


}

export default LoginForm