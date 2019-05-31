import firebase from 'firebase/app';

import Auth from './components/auth/auth';

// import MyNavbar from './components/MyNavbar/MyNavbar';

// import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

//  initialize app makes an asynchronous request to firebase with you credential
const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  // MyNavbar.navbarEvents();
  // authData.checkLoginStatus();
  Auth.authStringBuilder();
};

init();
