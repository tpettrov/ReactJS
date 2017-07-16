/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carStore from '../../../stores/CarStore'
import carActions from '../../../actions/CarActions'
import toastr from 'toastr'

class Likes extends Component{


    constructor(props){

        super(props)


        this.state = {

            userLiked: false
        }

        this.handleCarLiked = this.handleCarLiked.bind(this)

        carStore.on(carStore.eventTypes.CAR_LIKED,
            this.handleCarLiked)


    }




    handleNewLike(event){

        //check if user has already liked

        if (this.state.userLiked) {

            toastr.error('You have already liked this car. React validation!')
        } else {

            carActions.like(this.props.carId)
        }



    }

    componentWillUnmount(){

        carStore.removeListener(carStore.eventTypes.CAR_LIKED,
            this.handleCarLiked)

    }


    handleCarLiked(data) {

        if(!data.success) {

            toastr.error(data.message)

        } else {

            carActions.getCarById(this.props.carId)

            this.setState({
                userLiked: true
            })
            toastr.success(data.message)

        }


    }


    render(){

        let likes = this.props.likes

        return (


            <div>
                Likes: <span>{likes}</span>
                <button onClick={this.handleNewLike.bind(this)}>Like</button>
            </div>

        )


    }


}

export default Likes