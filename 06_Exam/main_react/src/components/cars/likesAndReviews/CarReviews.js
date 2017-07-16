/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import CarReviewForm from './CarReviewsForm'
import HandleHelper from '../../common/HandleHelper'
import carActions from '../../../actions/CarActions'
import carStore from '../../../stores/CarStore'
import toastr from 'toastr'

class CarReviews extends Component {

    constructor(props) {

        super(props)

        this.state = {

            newReview: {

                rating: 1,
                comment: 'Fucked up comment'
            },

            reviews: [],
            error: ''

        }

        this.handleNewReviewAdded = this.handleNewReviewAdded.bind(this)
        this.handleReviewsLoaded = this.handleReviewsLoaded.bind(this)

        carStore.on(carStore.eventTypes.NEW_REVIEW_ADDED,
            this.handleNewReviewAdded)

        carStore.on(carStore.eventTypes.REVIEWS_LOADED,
            this.handleReviewsLoaded)


    }

    handleNewReviewChange(event) {

        HandleHelper.handle.bind(this)(event, 'newReview')

    }

    componentDidMount() {

        this.getReviews()
    }


    getReviews() {

        carActions.getReviews(this.props.carId)
    }


    handleReviewsLoaded(data) {

        this.setState({reviews: data})

    }

    componentWillUnmount() {

        carStore.removeListener(carStore.eventTypes.NEW_REVIEW_ADDED,
            this.handleNewReviewAdded)

        carStore.removeListener(carStore.eventTypes.REVIEWS_LOADED,
            this.handleReviewsLoaded)


    }

    handleNewReviewSave(event) {

        event.preventDefault()


        if (!this.validateReview()) {

            return
        } else {

            carActions.addReview(this.state.newReview, this.props.carId)

        }


    }

    handleNewReviewAdded(data) {

        if (!data.success) {

            let firstError = data.message

            if (data.errors) {
                firstError = HandleHelper.parseErrorMessage(data)
            }

            this.setState({
                error: firstError
            })

        } else {

            let reviews = this.state.reviews
            reviews.push(data.review)  //da se proveri !!!
            this.setState({reviews})
            toastr.success('Review added')
        }
    }

    validateReview() {


        const newReview = this.state.newReview
        let formIsValid = true
        let error = ''

        if (newReview.rating <= 0 || newReview.rating > 5) {

            error = 'Rating must be number between 0 and 5. React.'

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

    }




    render() {

        let reviews = this.state.reviews.map((review, index) => {

            return <div key={index}>

                <p>Comment: {review.comment}</p>
                <p>Rating: {review.rating}</p>

            </div>

        })

        return (
            <div>

                <CarReviewForm newReview={this.state.newReview}
                               onSave={this.handleNewReviewSave.bind(this)}
                               onChange={this.handleNewReviewChange.bind(this)}
                               error={this.state.error}/>
                <h2>ALL reviews:</h2>
                {reviews}
            </div>

        )
    }


}


export default CarReviews