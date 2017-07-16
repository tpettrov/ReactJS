/**
 * Created by Toni on 7/16/2017.
 */
import React from 'react'
import Input from '../common/Input'

const CreateCarForm = (props) => {

    return (
        <form>
            <div>{props.error}</div>
            <Input
                name='make'
                placeholder='Car make'
                onChange = {props.onChange}
                value = {props.car.make}
            />
            <Input
                name='model'
                placeholder='Car model'
                onChange = {props.onChange}
                value = {props.car.model}
            />
            <Input
                name='year'
                type="number"
                placeholder='Car year'
                onChange = {props.onChange}
                value = {props.car.year}
            />
            <Input
                name='engine'
                placeholder='Car engine'
                onChange = {props.onChange}
                value = {props.car.engine}
            />
            <Input
                name='price'
                type="number"
                placeholder='Car price'
                onChange = {props.onChange}
                value = {props.car.price}
            />
            <Input
                name='image'
                placeholder='Image url'
                onChange = {props.onChange}
                value = {props.car.image}
            />
            <Input
                name='mileage'
                placeholder='Car mileage'
                type="number"
                onChange = {props.onChange}
                value = {props.car.mileage}
            />
            <input type="submit" value="Create Car" onClick={props.onSave}/>
        </form>


    )


}

export default CreateCarForm