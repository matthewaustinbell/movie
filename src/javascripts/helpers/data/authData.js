import firebase from 'firebase/app';
import 'firebase/auth';

import movieData from './movieData';
import movies from '../../components/movie/Movie';


const authDiv = document.getElementById('auth');
const movieDiv = document.getElementById('movie');
const movieNavbar = document.getElementById('navbar-button-movie');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');


const createNewMovie = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const imgUrl = document.getElementById('imageUrl').value;
  console.error(name, rating, imgUrl);
  const newMovie = {
    title: document.getElementById('name').value,
    mpaaRating: document.getElementById('rating').value,
    imageUrl: document.getElementById('imageUrl').value,
  };
  movieData.addNewMovie(newMovie)
    .then(() => {
      movies.initMoviesData();
      document.getElementById('new-movie').classList.add('hide');
    });
};

const newMovieButton = () => {
  console.error('createNewmovie');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

const addEvents = () => {
  document.getElementById('add-movie-button').addEventListener('click', newMovieButton);
};

// this is shows and removes things from the navbar
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      movieDiv.classList.remove('hide');
      movieNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      movies.initMoviesData(user.uid);
      addEvents();
    } else {
      authDiv.classList.remove('hide');
      movieDiv.classList.add('hide');
      movieNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

const getMovies = (uid) => {
  movieData.getMoviesByUid(uid);
  console.error(uid);
};


export default { checkLoginStatus, getMovies };
