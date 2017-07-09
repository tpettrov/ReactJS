import React, {Component} from 'react'
import TextInput from './textInput'

class BookForm extends Component {


    render() {



            return (


                    <form>
                        <TextInput 
           whenChanged={this.props.whenChanged} 
           name='title' 
           placeholder='Enter book title' 
           label='Book title'
           value={this.props.book.title}
           />

           <TextInput 
           whenChanged={this.props.whenChanged} 
           name='author' 
           placeholder='Enter book author' 
           label='Book author'
           value={this.props.book.author}
           />


           <input type='submit' value='Add Book' onClick={this.props.onSave}/>
           
                        </form>




            )


    }



}

export default BookForm