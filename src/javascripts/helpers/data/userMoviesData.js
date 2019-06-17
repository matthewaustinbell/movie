import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMoviesByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const userMoviesResults = results.data;
      const userMovies = [];
      Object.keys(userMoviesResults).forEach((userMoviesId) => {
        userMoviesResults[userMoviesId].id = userMoviesId;
        userMovies.push(userMoviesResults[userMoviesId]);
      });
      resolve(userMovies);
    })
    .catch(err => reject(err));
});

const addNewUserMovies = movieObject => axios.post(`${firebaseUrl}/movies.json`, movieObject);

const editUserMovies = (userMoviesId, userMoviesObj) => axios.put(`${firebaseUrl}/rsvps/${userMoviesId}.json`, userMoviesObj);

export default { getUserMoviesByUid, addNewUserMovies, editUserMovies };
