import {homePageQueue} from './homepage.js';
import {menuPageQueue} from './menu.js';
import {contactPageQueue} from './contact';
import './style.css'

const content = document.querySelector('#content');
const baseContent = loadBase(content);

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
        appendNewContent(homePageQueue, pageContent)
    });
    menuPageBtn.addEventListener('click', () => {
        appendNewContent(menuPageQueue, pageContent)
    });
    contactPageBtn.addEventListener('click', () => {
        appendNewContent(contactPageQueue, pageContent)
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
    appendNewContent(homePageQueue, baseContent);
}

export {initialize, baseContent, appendNewContent};