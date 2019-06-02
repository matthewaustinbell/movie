import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

const movieStringBuilder = (uid) => {
  movieData.getMovieByUid(uid)
    .then((movie) => {
      console.error(movie);
      let domString = `<h1>${movie.date}</h1>`;
      domString += `<img src=${movie.imageUrl} alt="movie location" />`;
      domString += `<h2>${movie.location} @ ${movie.time}</h2>`;
      util.printToDom('event', domString);
    }).catch(err => console.error('could not get movie', err));
};

export default { movieStringBuilder };
