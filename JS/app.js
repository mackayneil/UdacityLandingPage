import { backToTop } from './backToTop.js';
import { checkClicked, saveUserInput, btnComplete } from './modal.js';
import { addUserData, addPlaces } from './createPage.js';
import { menuClickEvent } from './topMenu.js';


backToTop();
menuClickEvent();


// Functionality for complete buttons
btnComplete.addEventListener('click', function(e) {
    e.preventDefault();
    checkClicked();
    saveUserInput();
    addUserData();
    addPlaces();
});


const navItems = document.querySelector('#nav-items'),
    navLinks = navItems.children;

for (const i of navLinks) {
    i.addEventListener('click', function() {
        if (window.innerWidth < 800) {
            navItems.classList.add('d-none');
        }
    })
}

