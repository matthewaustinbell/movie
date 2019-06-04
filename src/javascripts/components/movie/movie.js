import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

const addEvents = () => {
  document.getElementById('add-movie-button').addEventListener('click', () => {
    console.error('add-movie-button');
  });
};


const movieStringBuilder = (movies) => {
  console.error(movies);
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="card" style="width: 25rem;">`;
    domString += '<div class="card-body">';
    domString += `<img src=${movie.imageUrl} alt="movie location" />`;
    domString += `<h5>${movie.title}</5>`;
    domString += `<h6>${movie.mpaaRating}</h6>`;
    domString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('allMovies', domString);
  addEvents();
};

const initMoviesData = () => {
  movieData.getMoviesByUid()
    .then((movie) => {
      movieStringBuilder(movie);
    })
    .catch(err => console.error(err));
};

export default { initMoviesData };
