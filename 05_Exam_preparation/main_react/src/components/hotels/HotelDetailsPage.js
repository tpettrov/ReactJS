/**
 * Created by Toni on 7/15/2017.
 */
import React, {Component} from 'react'
import hotelActions from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import HotelReviews from './reviews/HotelReviews'

class HotelDetailsPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            hotelId: this.props.match.params.id,
            hotel: {}

        }
        this.handleLoadedHotel = this.handleLoadedHotel.bind(this)

        hotelStore.on(hotelStore.eventTypes.HOTEL_SINGLE_LOADED,
        this.handleLoadedHotel)


    }


    componentDidMount(){

        hotelActions.getHotelById(this.state.hotelId)

    }

    componentWillUnmount(){

        hotelStore.removeListener(hotelStore.eventTypes.HOTEL_SINGLE_LOADED,
            this.handleLoadedHotel)
    }


    handleLoadedHotel(data) {

            this.setState({
                hotel: data
            })
    }


    render(){

       let hotel = this.state.hotel

        return (
            <div>
            <h1>Details page:</h1>

                <img src={hotel.image} alt="hotel"/>
                <h1>{hotel.name}</h1>
                <p>{hotel.description}</p>
                <p>Number of rooms: {hotel.numberOfRooms}</p>

                <HotelReviews hotelId = {this.state.hotelId}/>
            </div>
        )
    }

}

export default HotelDetailsPage