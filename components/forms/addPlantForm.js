import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addPlantForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-plant--${obj.firebaseKey}` : 'submit-plant'}" class="mb-4">
      <div class="form-group">
        <label for="title">Plant Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="plantTitle" placeholder="Enter Plant Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Plant Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-group">
      <label for="type">Type</label>
      <input type="type" class="form-control" id="type" placeholder="Type" value="${obj.type || ''}" required>
      </div>
      
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addPlantForm;
