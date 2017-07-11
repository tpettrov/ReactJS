/**
 * Created by Toni on 7/11/2017.
 */
import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => {

    return (
        <form>

            <Input
            name='email'
            placeholder='E-mail'
            user={props.user}
            onChange = {props.onChange}
            value = {props.user.email}
            />
            <Input
                name='password'
                type='password'
                placeholder="Password"
                user={props.user}
                value={props.user.password}
                onChange = {props.onChange}
            />
            <input type="submit" value="Login" onClick={props.onSave}/>
        </form>


    )


}

export default LoginForm