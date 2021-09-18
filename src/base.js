import {homepageQueue} from './homepage.js';
import {menupageQueue} from './menu.js';
import {contactpageQueue} from './contact';
import './style.css'

// Loads and displays base content container
// Everything loaded here won't be reloaded, so they don't need to be saved in a queue
function loadBase(container){
    const title = document.createElement('h1');
    title.textContent = 'Generic Dinner';

    const homePageBtn = document.createElement('button');
    homePageBtn.textContent = 'Home';
    const menuPageBtn = document.createElement('button');
    menuPageBtn.textContent = 'Menu';
    const contactPageBtn = document.createElement('button');
    contactPageBtn.textContent = 'Contact';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    homePageBtn.addEventListener('click', () => {
        appendNewContent(homepageQueue, pageContent)
    });
    menuPageBtn.addEventListener('click', () => {
        appendNewContent(menupageQueue, pageContent)
    });
    contactPageBtn.addEventListener('click', () => {
        appendNewContent(contactpageQueue, pageContent)
    });

    appendNewContent([title, homePageBtn, menuPageBtn, contactPageBtn, pageContent],
                    container)
    return pageContent;
}


// Appends children/page content based on the queue order (pageQueue)
function appendNewContent(pageQueue, container) {
    // Clears page content
    container.textContent = '';

    // Appends new page content
    for (const element of pageQueue) {
        container.appendChild(element);
    }
}


// Initializes page content, only called once on start
function initialize(){
    const content = document.querySelector('#content');
    const baseContent = loadBase(content);
    appendNewContent(homepageQueue, baseContent);
}

export {initialize};