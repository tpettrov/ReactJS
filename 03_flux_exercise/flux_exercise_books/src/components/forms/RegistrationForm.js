import React from 'react'


const RegistrationForm = (props) =>(

          
                    <form>
                        username: <input type='text' name='username' onChange={props.onChange}
                         value={props.user.username} />
                        password: <input type='password' name='password' onChange={props.onChange}
                        value={props.user.password}/>

                        <input type='submit' value='Register User' onClick={props.onClick}/>
           
                        </form>

        
)





export default RegistrationForm