
const moviesUsermovies = (movie, userMovies) => movie.map((userMovie) => {
  const newMovie = movie;
  const specificUserMovie = userMovies.find(usermovie => usermovie.userMovieIdId === newMovie.id);
  if (specificUserMovie) {
    newMovie.userMovieId = userMovie.id;
    newMovie.statusId = userMovie.statusId;
  }
  console.error(newMovie, '1');
  console.error(newMovie, '2');
  console.error(newMovie, '3');
  return newMovie;
});

export default { moviesUsermovies };
