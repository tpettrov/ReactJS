import React, {Component} from 'react'
import AllBooksActions from '../actions/AllBooksActions'
import BookForm from '../components/forms/BookForm'
import BooksStore from '../stores/BooksStore' 

class EditBookPage extends Component {

    constructor(props){

        super(props)

        this.state = ({
        bookId: this.props.match.params.id,
        book: {}
        })
    

    }

    componentDidMount(){

        this.getBookById()

    }

    getBookById(){

        BooksStore.getBookById(this.state.bookId).then((bookFound)=>{

            this.setState({book: bookFound})
            

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
                <h1> Edit the book </h1>
           
                <BookForm 
                onSave = {this.saveForm.bind(this)}
                whenChanged = {this.handleInputChange.bind(this)}
                book = {this.state.book} />
                
            </div>
          

        )

    }


}

export default EditBookPage