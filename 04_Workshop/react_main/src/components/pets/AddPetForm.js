/**
 * Created by Toni on 7/12/2017.
 */
import React from 'react'
import Input from '../common/Input'

const AddPetForm = (props) => {

    return (
        <form>

            <Input
                name='name'
                placeholder='Name'
                onChange = {props.onChange}
                value = {props.pet.name}
            />
            <Input
                name='age'
                type='number'
                value={props.pet.age}
                onChange = {props.onChange}
            />

            <Input
                name='url'
                placeholder='Paste a url'
                type='url'
                value={props.pet.url}
                onChange = {props.onChange}
            />

            <select name="type" onChange={props.onChange}>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Other">Other</option>
            </select>
            <input type="submit" value="Create Pet" onClick={props.onSave}/>
        </form>


    )


}

export default AddPetForm