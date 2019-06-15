const getuserMoviesByUid = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovies.json`)
    .then((results) => {
      const movieResults = results.data;
      const userMovies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        userMovies.push(movieResults[movieId]);
      });
      resolve(userMovies);
    })
    .catch(err => reject(err));
});