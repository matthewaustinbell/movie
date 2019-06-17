// import firebase from 'firebase/app';
// import 'firebase/auth';
import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

import userMoviesData from '../../helpers/data/userMoviesData';

import join from '../../helpers/join';

const addToWatchedList = (e) => {
  const buttonId = e.target.dataset.value;
  console.error(buttonId);
};

const addEvents = () => {
  document.addEventListener('click', addToWatchedList);
};


const movieStringBuilder = (movies) => {
  console.error(movies);
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="card" style="width: 25rem;">`;
    domString += '<div class="card-body">';
    domString += `<img src=${movie.imageUrl} alt="movie location" />`;
    domString += `<h4>${movie.title}</h4>`;
    domString += `<h6>${movie.mpaaRating}</h6>`;
    domString += '<a href="#" class="btn btn-dark">Delete</a>';
    domString += `<a href="#" data-value="${movie.id}" class="btn btn-link watched">Watched</a>`;
    domString += '<i class="material-icons">check_circle</i>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
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
          const newMovies = join.moviesUsermovies(movie, userMovies);
          movieStringBuilder(newMovies, movie.id);
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
