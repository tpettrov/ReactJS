/**
 * Created by Toni on 7/15/2017.
 */
import React, {Component} from 'react'
import HotelReviewsForm from './HotelReviewsForm'
import HandleHelper from '../../common/HandleHelper'
import hotelActions from '../../../actions/HotelActions'
import hotelStore from '../../../stores/HotelStore'
import toastr from 'toastr'

class HotelReviews extends Component {

    constructor(props){

        super(props)

        this.state = {

            newComment: {

                rating: 1,
                comment: 'Fucked up comment'
            },

            comments: [],
            error: ''

        }

        this.handleNewCommentAdded = this.handleNewCommentAdded.bind(this)
        this.handleCommentsLoaded = this.handleCommentsLoaded.bind(this)

        hotelStore.on(hotelStore.eventTypes.COMMENT_ADDED,
        this.handleNewCommentAdded)

        hotelStore.on(hotelStore.eventTypes.COMMENTS_LOADED,
            this.handleCommentsLoaded)

    }

    handleNewCommentChange(event){

        HandleHelper.handle.bind(this)(event, 'newComment')

    }

    componentDidMount(){

        this.getComments()
    }


    getComments(){

        hotelActions.getComments(this.props.hotelId)
    }


    handleCommentsLoaded(data){

        this.setState({comments: data})

    }
    componentWillUnmount(){

        hotelStore.removeListener(hotelStore.eventTypes.COMMENT_ADDED,
            this.handleNewCommentAdded)

        hotelStore.removeListener(hotelStore.eventTypes.COMMENTS_LOADED,
            this.handleCommentsLoaded)

    }

    handleNewCommentSave(event){
        event.preventDefault()
        hotelActions.addComment(this.state.newComment, this.props.hotelId)

    }

    handleNewCommentAdded(data) {

       if (!data.success) {

           let firstError = data.message

           if (data.errors) {
               firstError = HandleHelper.parseErrorMessage(data)
           }

           this.setState({
               error: firstError
           })

       } else {

          let comments = this.state.comments
            comments.push(data.review)
           this.setState({comments})
           toastr.success('comment added')
       }
    }

    render(){

        let reviews = this.state.comments.map((review, index) => {

            return <div key={index}>
                <h1>{review.comment}</h1>
                <p>{review.rating}</p>
            </div>

        })

            return (
    <div>
        <HotelReviewsForm newComment={this.state.newComment}
                          onSave={this.handleNewCommentSave.bind(this)}
                          onChange={this.handleNewCommentChange.bind(this)}
        error={this.state.error}/>

        {reviews}
    </div>

    )}



}


export default HotelReviews