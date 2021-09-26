
import {appendChildren, replaceContent} from './helper.js';

import {homeContainer} from './homepage.js';
import {menuContainer} from './menu.js';
import {contactContainer} from './contact.js';

import './style.css'

// Loads and displays base content container
// Everything loaded here won't be reloaded, so they don't need to be saved in a queue
function loadBase(baseContainer){
    baseContainer.classList.add('base')
    const baseContent = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Generic Dinner';

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');


    const homePageBtn = document.createElement('button');
    homePageBtn.textContent = 'Home';
    const menuPageBtn = document.createElement('button');
    menuPageBtn.textContent = 'Menu';
    const contactPageBtn = document.createElement('button');
    contactPageBtn.textContent = 'Contact';

    homePageBtn.addEventListener('click', () => {
        replaceContent(baseContent, homeContainer);
    });
    menuPageBtn.addEventListener('click', () => {
        replaceContent(baseContent, menuContainer);
    });
    contactPageBtn.addEventListener('click', () => {
        replaceContent(baseContent, contactContainer);
    });

    appendChildren(navbar, [homePageBtn, menuPageBtn, contactPageBtn]);


    appendChildren(baseContainer, [title, navbar, baseContent]);
    return baseContent;
}

const bodyContent = document.querySelector('#content');
const baseContent = loadBase(bodyContent);

// Initializes page content, only called once on start
function initialize(){
    replaceContent(baseContent, homeContainer);
}

export {initialize, baseContent};