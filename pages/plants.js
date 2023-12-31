import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

//

const showPlants = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-plant-btn">Add A Plant</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';

  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">${item.description}</p>
    <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;
    renderToDOM('#form-container', domString);
  });
};

export default showPlants;
