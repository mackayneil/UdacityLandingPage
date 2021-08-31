import { backToTop } from './backToTop.js';
import { checkClicked, saveUserInput, btnComplete } from './modal.js';
import { addUserData, addPlaces, addNavLinks } from './createPage.js';
import { menuClickEvent } from './topMenu.js';


backToTop();
menuClickEvent();


// Functionality for complete buttons
btnComplete.addEventListener('click', function(e) {
    e.preventDefault();
    addNavLinks();
    checkClicked();
    saveUserInput();
    addUserData();
    addPlaces();
});


