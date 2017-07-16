/**
 * Created by Toni on 7/16/2017.
 */
import React, {Component} from 'react'
import carActions from '../../../actions/CarActions'
import carStore from '../../../stores/CarStore'


class Stats extends Component{

    constructor(props){

        super(props)

        this.state = {

            stats: {}
        }

        this.handleStatsLoaded = this.handleStatsLoaded.bind(this)

        carStore.on(carStore.eventTypes.STATS_LOADED,
        this.handleStatsLoaded)

    }


    componentDidMount(){

        this.getStats()

    }

    getStats(){

        carActions.getStats()
    }

    handleStatsLoaded(stats){

        this.setState({stats})

    }


    render(){

        return (

            <div>
                <h1>Stats:</h1>
                <span>Number of Cars: {this.state.stats.cars}</span>
                <div></div>
                <span>Number of Users: {this.state.stats.users}</span>
            </div>

        )

    }

}

export default Stats