import firebase from 'firebase/app';
import 'firebase/auth';

// its like a big if else statement.
// uses a firebase auth method().
// uses signOut() method. its a promise that gets sent back to you.
// used a .then and a dot .catch to test with errs
const navbarEvents = () => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut();
      }
    });
  }
};

export default { navbarEvents };
