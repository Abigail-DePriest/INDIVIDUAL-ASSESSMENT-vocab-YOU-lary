import getPlants from '../../api/plantData';
import showPlants from '../../pages/plants';
import { signOut } from '../../utils/auth';

const navigationEvents = () => {

  document.querySelector('#logout-button')
.addEventListener('click', signOut);

document.querySelector('#all-plants').addEventListener('click', () => {
  getPlants().then(showPlants);
});

};

export default navigationEvents;
