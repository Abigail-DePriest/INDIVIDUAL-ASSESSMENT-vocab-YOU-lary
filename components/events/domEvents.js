import { getPlants, getSinglePlant, deletePlant } from '../../api/plantData';
import showPlants from '../../pages/plants';
import addPlantForm from '../forms/addPlantForm';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A PLANT
    if (e.target.id.includes('delete-plant')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE PLANT', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deletePlant(firebaseKey).then(() => {
          getPlants().then(showPlants);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A PLANT
    if (e.target.id.includes('newPlant')) {
      addPlantForm();
    }
    if (e.target.id.includes('all-plants')) {
      getPlants().then(showPlants);
    }
    // TODO: CLICK EVENT EDITING/UPDATING A PLANT
    if (e.target.id.includes('edit-plant-btn')) {
      console.warn('EDIT PLANT', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getSinglePlant(firebaseKey).then((plantObj) => addPlantForm(plantObj));
    }
  });
};

export default domEvents;
