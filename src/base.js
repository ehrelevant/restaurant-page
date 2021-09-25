
import {appendChildren, replaceContent} from './helper.js';

import {homeContainer} from './homepage.js';

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
        //appendNewContent(homePageQueue, pageContent)
    });
    menuPageBtn.addEventListener('click', () => {
        //appendNewContent(menuPageQueue, pageContent)
    });
    contactPageBtn.addEventListener('click', () => {
        //appendNewContent(contactPageQueue, pageContent)
    });

    appendChildren(baseContainer, [title, homePageBtn, menuPageBtn, contactPageBtn, baseContent]);
    return baseContent;
}

// Initializes page content, only called once on start
function initialize(){
    const bodyContent = document.querySelector('#content');
    const baseContent = loadBase(bodyContent);
    replaceContent(baseContent, homeContainer);
}

export {initialize};