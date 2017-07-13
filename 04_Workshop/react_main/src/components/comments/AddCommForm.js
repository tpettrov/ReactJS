/**
 * Created by apetrov on 7/13/2017.
 */
import React, {Component} from 'react'
import Input from '../common/Input'

class AddCommForm extends Component {

    render(){

        return (

            <div>
                <form>
                    <Input/>
                    <input type="submit" value="Add Comment" onClick={this.props.onClick}/>
                </form>
            </div>


        )

    }


}

export default AddCommForm