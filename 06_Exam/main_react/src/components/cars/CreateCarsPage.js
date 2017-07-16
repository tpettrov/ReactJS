/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import CreateCarForm from './CreateCarForm'
import HandleHelper from '../common/HandleHelper'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import toastr from 'toastr'

class CreateCarsPage extends Component {

    constructor(props){

        super(props)

        this.state = {

            car: {

                make: 'Opel',
                model: 'Vectra',
                year: 1998,
                engine: 'V8',
                price: 1000,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/1990_Opel_Vectra_GLS_%2819384050978%29.jpg/280px-1990_Opel_Vectra_GLS_%2819384050978%29.jpg',
                mileage: 999


            },

            error: ''

        }

        this.handleCarCreated = this.handleCarCreated.bind(this)

        carStore.on(carStore.eventTypes.CAR_CREATED,
        this.handleCarCreated)

    }

    componentWillUnmount(){

        carStore.removeListener(carStore.eventTypes.CAR_CREATED,
            this.handleCarCreated)

    }


    handleCarChange(event){

        HandleHelper.handle.bind(this)(event, 'car')

    }

    handleCarSave(event){

        event.preventDefault()

       if (!this.validateCar()) {

            return
       } else {

           carActions.create(this.state.car)

       }



    }

    handleCarCreated(data){

        if (!data.success) {

            let firstError = data.message

            if (data.errors) {
                firstError = HandleHelper.parseErrorMessage(data)
            }


            this.setState({
                error: firstError
            })

        } else {

            toastr.success('Car created successfully!')
            this.props.history.push('/')

        }

    }

    validateCar() {


        const car = this.state.car
        let formIsValid = true
        let error = ''

        if (car.make.length <= 3) {

            error = 'Make must be more than 3 symbols. React.'

            formIsValid = false

        }

        if (car.model.length <= 3) {

            error = 'Model must be more than 3 symbols. React. '

            formIsValid = false

        }

        if (car.year > 2050 || car.year < 1950 ) {

            error = 'Year must be between 1950 and 2050. React. '

            formIsValid = false

        }

        if (car.engine.length <= 1) {

            error = 'Engine must be more than 1 symbol. React. '

            formIsValid = false

        }

        if (car.price < 0) {

            error = 'Price must be a positive number. React. '

            formIsValid = false

        }

        if (car.image.length === 0 || !car.image) {

            error = 'Image URL is required. React. '

            formIsValid = false

        }

        if (error) {

            this.setState({error: error})

        }

        return formIsValid

    }


    render(){



        return (

            <div>
                <h1>Create Car</h1>
                <CreateCarForm car={this.state.car}
                onChange={this.handleCarChange.bind(this)}
                onSave={this.handleCarSave.bind(this)}
                error = {this.state.error}/>
            </div>
        )

    }

}

export default CreateCarsPage