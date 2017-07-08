import React, {Component} from 'react'
import TextInput from './textInput'
import AllBooksActions from '../../actions/AllBooksActions'

class CreateBookPage extends Component {

    constructor(props){

        super(props)

        this.state = ({
        
        })
    

    }
    
    saveForm (event) {

        event.preventDefault()
        //externalApi.save(this.state.data)
       AllBooksActions.addBook(this.state)
        //this.props.history.push('/redirect/path')
    }


    handleInputChange (event) {
        const target = event.target
        const field = target.name
        const value = target.value
        this.setState({[field]: value})
    }





    render() {
 
           let title = <TextInput whenChanged={this.handleInputChange.bind(this)} name='title' placeholder='Enter book title' label='Book title'/>
           let author = <TextInput whenChanged={this.handleInputChange.bind(this)} name='author' placeholder='Enter book author' label='Book author'/>


        return (
            
            <form>
                {title}
                {author}
                <input type='submit' value='Add Book' onClick={this.saveForm.bind(this)}/>
            </form>
          

        )

    }


}

export default CreateBookPage