import firebase from 'firebase/app';

import 'firebase/auth'; // comes in behind first import and attaches auth to all things you called firebase

import util from '../../helpers/util';

import googleImage from './googlebutton.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn-danger">';
  domString += `<img src=${googleImage} />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
