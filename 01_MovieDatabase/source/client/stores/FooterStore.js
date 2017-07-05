/**
 * Created by Toni on 7/5/2017.
 */
import alt from '../alt'
import FooterActions from '../actions/FooterActions'


class FooterStore {


    constructor () {

        this.bindActions(FooterActions)
        this.mostRecentMovies = []

    }

   onGetFiveRecentMoviesSuccess(data) {

        this.mostRecentMovies = data
   }

}

export default alt.createStore(FooterStore)