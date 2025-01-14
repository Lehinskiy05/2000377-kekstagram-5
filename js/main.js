import { getData } from './api.js';
import {renderMiniatures} from './miniature-draw.js';
import { initFilters } from './filters.js';
import './upload-form/upload-form.js';


getData()
  .then((data) => {
    renderMiniatures(data);
    return data;
  })
  .then((data) => {
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    initFilters(data);
  })
  .catch((error) => {
    showGetDataErrorMessage(error.message);
  });


function showGetDataErrorMessage() {
  const errorMessage = document.querySelector('.get-data-error-message');
  errorMessage.classList.remove('hidden');
}
