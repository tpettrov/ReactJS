/**
 * Created by Toni on 7/12/2017.
 */
class HandleHelper{

    static handle(event, stateField){

        const target = event.target
        const field = target.name
        const value = target.value

        const state = this.state[stateField]
        state[field] = value
        this.setState({[stateField]: state})

    }

    static parseErrorMessage(data){


        return Object
            .keys(data.errors)
            .map(k => data.errors[k])[0]
    }


}

export default HandleHelper