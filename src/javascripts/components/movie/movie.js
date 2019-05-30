import util from '../../helpers/util';
import movieData from '../../helpers/data/movieData';

const movieStringBuilder = (uid) => {
  movieData.getMovieByUid(uid).then((birthday) => {
    console.error(birthday);
    let domString = `<h1>${birthday.date}</h1>`;
    domString += `<img src=${birthday.imageUrl} alt="birthday location" />`;
    domString += `<h2>${birthday.location} @ ${birthday.time}</h2>`;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { movieStringBuilder };
