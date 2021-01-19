/**
 *  MovieList which renders individual movie objects as HTML
 */

import { useMovie } from '/scripts/MovieDataProvider.js'
import { Movie } from "/scripts/Movie.js"


let movieContainer = document.querySelector("#movie-container");

export function MovieList() {
  const allTheMovie = useMovie();

  let movieListHTMLString = "";

  for (const currentMovieInLoop of allTheMovie) {
    console.log(currentMovieInLoop);
    movieListHTMLString += Movie(currentMovieInLoop);
  }


//   console.log(movieListHTMLString);

  movieContainer.innerHTML = `${movieListHTMLString}`;
}