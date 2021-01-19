/**
 *  Movie which renders individual movie objects as HTML
 */
export const Movie = (movie) => {
    return `
        <section class="movie-card">
        <div class="movie-card_text">
        <h2 class="movie_title">${movie.title}</h2>
        <div class="movie_text">Director: ${movie.director}</div>
        <div class="movie_text">Rating: ${movie.rank}/5</div>
        <div><img  class="movie-image" src="${movie.image}" /></div>
            
            </div>
        </section>
    `
}