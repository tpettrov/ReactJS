/**
 * Created by Toni on 7/15/2017.
 */
import React, {Component} from 'react'
import queryString from 'query-string'
import hotelActions from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import {Link} from 'react-router-dom'

class HotelListPage extends Component {

    constructor(props) {
        super(props)


        const query = queryString.parse(this.props.location.search)
        const page = parseInt(query.page, 10) || 1

        this.state = {

            hotels: [],
            page: page || 1,


        }

        this.handleLoadedHotels = this.handleLoadedHotels.bind(this)

        hotelStore.on(hotelStore.eventTypes.HOTELS_LOADED,
            this.handleLoadedHotels)

    }


    handleLoadedHotels(data) {

        this.setState({hotels: data})


    }


    componentDidMount() {

        hotelActions.getHotels(this.state.page)

    }

    componentWillUnmount() {

        hotelStore.removeListener(hotelStore.eventTypes.HOTELS_LOADED,
            this.handleLoadedHotels)



    }

    loadNextBooks() {

        if (this.state.hotels.length === 0) {
            return
        }

        let page = this.state.page
        page++
        this.setState({page})
        hotelActions.getHotels(page)
        this.props.history.push(`/?page=${page}`)


    }


    loadPrevBooks() {

        let page = this.state.page
        if (page === 1) {
            return
        }

        page--
        this.setState({page})
        hotelActions.getHotels(page)
        this.props.history.push(`/?page=${page}`)


    }





    render() {

        //good to have hotel Listing Component
               let hotels = this.state.hotels.map(hotel => {

                    return <div key={hotel.id}>
                        <h1>{hotel.name}</h1>

                        <Link to={`/hotels/details/${hotel.id}`}>
                            Click on image for details:
                            <img src={hotel.image} alt="hotel"/></Link>

                    </div>


                })


        return (

            <div>
                <h1>Hotel list page</h1>
                {hotels}
                <button onClick={this.loadPrevBooks.bind(this)}>PREV</button>
                <button onClick={this.loadNextBooks.bind(this)}>NEXT</button>
            </div>
        )


    }

}

export default HotelListPage