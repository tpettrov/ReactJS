/**
 * Created by Toni on 7/5/2017.
 */
import alt from '../alt'

class HomeActions {

    constructor(){

        this.generateActions(

            'getTopTenMoviesSuccess',
            'getTopTenMoviesFail'
        )

    }

    getTopTenMovies() {

        let request = {

            url: '/api/movies/top-ten',
            method: 'get'

        }

        $.ajax(request)
            .done(data => {

                let movies = []
                for (let movie of data) {

                    let movieData = {

                        _id: movie._id,
                        name: movie.name,
                        description: movie.description,
                        genres: movies.genres

                    }

                    movies.push(movieData)

                }

                this.getTopTenMoviesSuccess(movies)

            })
            .fail(err => this.getTopTenMoviesFail(err))

        return true
    }


}

export default alt.createActions(HomeActions)