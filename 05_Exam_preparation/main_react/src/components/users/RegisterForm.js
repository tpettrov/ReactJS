/**
 * Created by apetrov on 7/11/2017.
 */
import React from 'react'

const RegisterForm = (props) => {

    return (
        <form>
            <div>{props.error}</div>

            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={props.user.email}
                onChange={props.onChange}
            />

            <br/>


            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={props.user.name}
                onChange={props.onChange}
            />

            <br/>


            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={props.user.password}
                onChange={props.onChange}
            />

            <br/>

                <input type="submit" value="Register" onClick={props.onSave}/>
        </form>


    )


}

export default RegisterForm