// import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

import userMoviesData from '../../helpers/data/userMoviesData';

import join from '../../helpers/join';

const addToWatchedList = (e) => {
  const userMovieId = e.target.closest('.test').id;
  console.error(userMovieId);
  const userMovie = {
    // where do these come from?
    // movieId: e.target.closest('test').id,
    // userMoviesId: e.target.id.split('.')[1],
    statusId: e.target.value,
  };
  // if (userMovieId) {
    // update
  userMoviesData.editUserMovies(userMovieId, userMovie)
    .then(() => {
      movieStringBuilder(); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no add', err));

  // eslint-disable-line no-use-before-define
  // } else {
  // add
  // userMoviesData.addNewUserMovies(userMovie)
  //   .then(() => movieStringBuilder(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
  // }
};


const addEvents = () => {
  document.addEventListener('click', addToWatchedList);
};

const watchedButtons = document.getElementsByClassName('radio');
for (let j = 0; j < watchedButtons.length; j += 1) {
  watchedButtons[j].addEventListener('click', addToWatchedList);
}

const movieStringBuilder = (movies) => {
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="car test" style="width: 25rem;">`;
    // console.error('hi...........', movie.id);
    domString += '<div class="card-body">';
    domString += `<img src=${movie.imageUrl} alt="movie location" />`;
    domString += `<h4>${movie.title}</h4>`;
    domString += `<a href="#" data-value="${movie.id}" class="btn btn-link watched">Watched ?</a>`;
    domString += '<i class="material-icons">check_circle</i>';
    domString += '<tr>';
    domString += `<td>${movie.name}</td>`;
    domString += `<td>${movie.email}</td>`;
    // domString += `<td id=${movie.userMovieId}>`;
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio1.${movie.id}" name="radio-buttons_${movie.id}" class="custom-control-input radio" value="status2" ${movie.statusId === 'status2' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio1.${movie.id}">Yes</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio2.${movie.id}" name="radio-buttons_${movie.id}" class="custom-control-input radio" value="status3" ${movie.statusId === 'status3' ? 'checked' : ''}>`;
    domString += `<label class=" custom-control-label" for="radio2.${movie.id}">No</label>`;
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
          const newMovies = join.moviesUsermovies(movie, userMovies);
          console.error(newMovies, '......');
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
