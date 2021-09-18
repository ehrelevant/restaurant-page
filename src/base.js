import {homepageQueue} from './homepage.js';

const content = document.querySelector('#content')

// Loads and displays base content container
// Everything loaded here won't be reloaded, so they don't need to be saved in a queue
function loadBase(container){
    const pickHomeBtn = document.createElement('button');
    pickHomeBtn.textContent = 'Home';
    const pickMenuBtn = document.createElement('button');
    pickMenuBtn.textContent = 'Menu';
    const pickContactBtn = document.createElement('button');
    pickContactBtn.textContent = 'Contact';

    const pageContent = document.createElement('div');

    appendNewContent([pickHomeBtn, pickMenuBtn, pickContactBtn, pageContent], container)
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


function initialize(){
    const baseContent = loadBase(content);
    appendNewContent(homepageQueue, baseContent);
}

export {initialize};