import { useMovie } from '/scripts/MovieDataProvider.js'

const allTheMovie = useMovie()

for (const movie of allTheMovie) {
    console.log(movie)
}

import { MovieList } from '/scripts/MovieList.js'

MovieList()