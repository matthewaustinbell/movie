// import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

import userMoviesData from '../../helpers/data/userMoviesData';

import join from '../../helpers/join';

const addToWatchedList = (e) => {
  console.error('addToWatchList running');
  const userMovieId = e.target.closest('.amovie').id;
  console.error(userMovieId);
  console.error(e.target.value);
  const userMovie = {
    statusId: e.target.value,
  };
  userMoviesData.editUserMovies(userMovieId, userMovie)
    .then(() => {
      movieStringBuilder(); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no add', err));
};


const addEvents = () => {
  document.addEventListener('click', addToWatchedList);
};

const watchedButtons = document.getElementsByClassName('radio');
for (let j = 0; j < watchedButtons.length; j += 1) {
  watchedButtons[j].addEventListener('click', addToWatchedList);
}

const movieStringBuilder = (movies) => {
  console.error(movies);
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="card amovie" style="width: 25rem;">`;
    // console.error('hi...........', movie.id);
    domString += '<div class="card-body">';
    domString += `<img src=${movie.imageUrl} alt="movie location" />`;
    domString += `<h4>${movie.title}</h4>`;
    domString += '<tr>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio1.${movie.id}" name="radio-buttons_${movie.id}" class="custom-control-input radio" value="status2" ${movie.statusId === 'status2' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio1.${movie.id}">HAVE WATCHED</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio2.${movie.id}" name="radio-buttons_${movie.id}" class="custom-control-input radio" value="status3" ${movie.statusId === 'status3' ? 'checked' : ''}>`;
    domString += `<label class=" custom-control-label" for="radio2.${movie.id}">NOT WATCHED</label>`;
    domString += '</div>';
    domString += '</td>';
    domString += `<h6>${movie.mpaaRating}</h6>`;
    domString += '<a href="#" class="btn btn-dark">Delete</a>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</tr>';
  });
  domString += '</div>';
  util.printToDom('allMovies', domString);
  addEvents();
};

const initMoviesData = (uid) => {
  // const userId = firebase.auth().currentUser.uid;
  movieData.getMoviesByUid(uid)
    .then((movie) => {
      userMoviesData.getUserMoviesByUid(uid)
        .then((userMovies) => {
          console.error(userMovies);
          const newMovies = join.moviesUsermovies(movie, userMovies);
          movieStringBuilder(newMovies);
        })
        .catch(err => console.error('no movies', err));
    });
};


// const getFriends = (uid) => {
//   friendsData.getFriendsByUid(uid)
//     .then((friends) => {
//       birfdayData.getBirfdayByUid(uid)
//           .then((rsvps) => {
//           const finalFriends = SMASH.friendRsvps(friends, rsvps);
//           showFriends(finalFriends, bday.id);
//         })
//     .catch(err => console.error('no friends', err));
// };


export default { initMoviesData };
