
import {appendChildren, replaceContent} from './helper.js';

import {homeContainer} from './homepage.js';
import {menuContainer} from './menu.js';
import {contactContainer} from './contact.js';

import './style.css'

// Loads and displays base content container
// Everything loaded here won't be reloaded, so they don't need to be saved in a queue
function loadBase(baseContainer){
    const title = document.createElement('h1');
    title.textContent = 'Generic Dinner';

    const homePageBtn = document.createElement('button');
    homePageBtn.textContent = 'Home';
    const menuPageBtn = document.createElement('button');
    menuPageBtn.textContent = 'Menu';
    const contactPageBtn = document.createElement('button');
    contactPageBtn.textContent = 'Contact';

    const baseContent = document.createElement('div');

    homePageBtn.addEventListener('click', () => {
        replaceContent(baseContent, homeContainer);
    });
    menuPageBtn.addEventListener('click', () => {
        replaceContent(baseContent, menuContainer);
    });
    contactPageBtn.addEventListener('click', () => {
        replaceContent(baseContent, contactContainer);
    });

    appendChildren(baseContainer, [title, homePageBtn, menuPageBtn, contactPageBtn, baseContent]);
    return baseContent;
}

const bodyContent = document.querySelector('#content');
const baseContent = loadBase(bodyContent);

// Initializes page content, only called once on start
function initialize(){
    replaceContent(baseContent, homeContainer);
}

export {initialize, baseContent};