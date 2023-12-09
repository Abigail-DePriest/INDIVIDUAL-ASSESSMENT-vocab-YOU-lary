import showPlants from '../../pages/plants';
import { createPlant, updatePlants, getPlants } from '../../api/plantData';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-plant')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        uid: user.uid
      };
      createPlant(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updatePlants(patchPayload).then(() => {
          getPlants().then(showPlants);
        });
      });
    }

    if (e.target.id.includes('update-plants')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
      };
      updatePlants(payload).then(() => {
        getPlants().then(showPlants);
      });
    }
  });
};

export default formEvents;
