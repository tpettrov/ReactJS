/**
 * Created by Toni on 7/5/2017.
 */
import dispatcher from '../dispatcher'

let allBookActions = {
    showNextPage: () => {
        dispatcher.dispatch({
            type: 'NEXT_PAGE',
        })
    },

    showPreviousPage: () => {
        dispatcher.dispatch({
            type: 'PREVIOUS_PAGE',
        })

    }

}

export default allBookActions
