import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../components/events/navigationEvents';
import { getPlants } from '../api/plantData';
import showPlants from '../pages/plants';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getPlants().then((plants) => showPlants(plants));
};

export default startApp;
