import {appendChildren} from './helper.js';

import {switchHomePage, switchMenuPage, switchContactPage} from './index.js'

import './style.css'

// Loads and displays base content container
// Everything loaded here won't be reloaded, so they don't need to be saved in a queue
function loadBase(baseContainer){
    baseContainer.classList.add('base')
    const baseContent = document.createElement('div');

    const titleBox =  document.createElement('div');
    titleBox.classList.add('title-container');

    const title = document.createElement('h1');
    title.textContent = 'Generic Dinner';
    titleBox.appendChild(title);

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');


    const homePageBtn = document.createElement('button');
    homePageBtn.textContent = 'Home';
    const menuPageBtn = document.createElement('button');
    menuPageBtn.textContent = 'Menu';
    const contactPageBtn = document.createElement('button');
    contactPageBtn.textContent = 'Contact';

    homePageBtn.addEventListener('click', () => {
        switchHomePage();
    });
    menuPageBtn.addEventListener('click', () => {
        switchMenuPage();
    });
    contactPageBtn.addEventListener('click', () => {
        switchContactPage();
    });

    appendChildren(navbar, [homePageBtn, menuPageBtn, contactPageBtn]);


    appendChildren(baseContainer, [titleBox, navbar, baseContent]);
    return baseContent;
}

const bodyContent = document.querySelector('#content');
const baseContent = loadBase(bodyContent);

export {baseContent};