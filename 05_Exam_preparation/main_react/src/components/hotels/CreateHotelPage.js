/**
 * Created by Toni on 7/15/2017.
 */
import React, {Component} from 'react'
import CreateHotelForm from './CreateHotelForm'
import HandleHelper from '../common/HandleHelper'
import hotelStore from '../../stores/HotelStore'
import hotelActions from '../../actions/HotelActions'
import toastr from 'toastr'


class CreateHotelPage extends Component {

    constructor(props) {

        super(props)

        this.state = {


            hotel: {

                name: 'Montevideo',
                location: 'Boyana',
                description: 'Nice hotel',
                numberOfRooms: 2,
                image: 'http://www.litorehotel.com/web/en/images/placeholders/1920x1200-0.jpg',
                parkingSlots: 3

            },

            error: ''


        }

        this.handleHotelCreated = this.handleHotelCreated.bind(this)

    hotelStore.on(hotelStore.eventTypes.HOTEL_CREATED,
        this.handleHotelCreated
    )

    }


    componentWillUnmount(){

        hotelStore.removeListener(hotelStore.eventTypes.HOTEL_CREATED,
            this.handleHotelCreated
        )

    }


    handleHotelCreated(data){

       if (!data.success) {

           let firstError = data.message

           if (data.errors) {
               firstError = HandleHelper.parseErrorMessage(data)
           }


           this.setState({
               error: firstError
           })

       } else {

           toastr.success('Hotel added')
           this.props.history.push('/')


       }

    }


    handleHotelChange(event) {

        HandleHelper.handle.bind(this)(event, 'hotel')

    }

    handleHotelCreation(event) {

        event.preventDefault()
        if (!this.validateHotel()) {

            return
        } else {

            hotelActions.create(this.state.hotel)

        }


    }

    validateHotel() {


        const hotel = this.state.hotel
        let formIsValid = true
        let error = ''

        if (hotel.name <= 3) {

            error = 'Name should be more than 3 symbols. React'

            formIsValid = false

        }

        if (hotel.image === 0) {

            error = 'Please provide image. React '

            formIsValid = false

        }

        if (hotel.description <= 10) {

            error = 'Description should be more than 10 characters. React '

            formIsValid = false

        }

        if (hotel.numberOfRooms < 0) {

            error = 'Number of rooms cannot be negative. React '

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

    }



    render() {


        return (
            <div>
                <h1>This is the create Hotel page</h1>
                <CreateHotelForm hotel={this.state.hotel}
                                 onChange={this.handleHotelChange.bind(this)}
                                 onSave = {this.handleHotelCreation.bind(this)}
                                 error = {this.state.error}/>
            </div>
        )


    }

}

export default CreateHotelPage