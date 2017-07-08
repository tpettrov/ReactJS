import React, {Component} from 'react'
import TextInput from './textInput'

class CreateBookForm extends Component {

    render() {
 
           let test = <TextInput name='title' placeholder='Enter book title' label='Book title'/>

        return (
            
            <div>
                {test}
            </div>
          

        )

    }


}

export default CreateBookForm