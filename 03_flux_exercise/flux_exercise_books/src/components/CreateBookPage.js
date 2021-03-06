import React, {Component} from 'react'
import AllBooksActions from '../actions/AllBooksActions'
import BookForm from '../components/forms/BookForm'

class CreateBookPage extends Component {

    constructor(props){

        super(props)

        this.state = ({
        
        })
    

    }
    
    saveForm (event) {

        event.preventDefault()
        AllBooksActions.addBook(this.state)
        
    }


    handleInputChange (event) {
        const target = event.target
        const field = target.name
        const value = target.value
        this.setState({[field]: value})
    }





    render() {
 

        return (
            
            <div>
                <h1> Enter the new book </h1>
           
                <BookForm 
                onSave = {this.saveForm.bind(this)}
                whenChanged = {this.handleInputChange.bind(this)}
                book = '' />
                
            </div>
          

        )

    }


}

export default CreateBookPage