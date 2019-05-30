import firebase from 'firebase/app';

import Auth from './components/auth/auth';

// import MyNavbar from './components/MyNavbar/MyNavbar';

// import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  Auth.authStringBuilder();
};

init();
