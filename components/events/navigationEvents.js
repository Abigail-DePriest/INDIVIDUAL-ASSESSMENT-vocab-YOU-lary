import showPlants from '../../pages/plants';
import { signIn, signOut } from '../../utils/auth';
import { getPlants } from '../../api/plantData';

const navigationEvents = () => {
  document.querySelector('#login-button')
    .addEventListener('click', signIn);

  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#app').addEventListener('click', (e) => {
  // TODO: CLICK EVENT FOR DELETING A PLANT
    if (e.target.id.includes('#all-plants')) {
      console.warn('show plants');
      getPlants().then(showPlants);
    }
  });
};

export default navigationEvents;
