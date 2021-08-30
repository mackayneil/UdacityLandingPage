import { backToTop } from './backToTop.js';
import { checkClicked, saveUserInput, btnComplete } from './modal.js'
import { addUserData, addPlaces } from './createPage.js'

backToTop()

// Functionality for complete buttons
btnComplete.addEventListener('click', function(e) {
    e.preventDefault();
    checkClicked();
    saveUserInput();
    addUserData();
    addPlaces();
})