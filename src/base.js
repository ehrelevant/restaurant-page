import {homepageQueue} from './homepage.js';

const content = document.querySelector('#content')

function displayPage(pageQueue, content) {
    content.textContent = '';
    for (const element of homepageQueue) {
        content.appendChild(element);
    }
}

function initialize(){
    displayPage(homepageQueue, content);
}

export {initialize};