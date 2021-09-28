
import {baseContent} from './base.js';

import {replaceContent} from './helper.js';

import {homeContainer} from './homepage.js';
import {menuContainer} from './menu.js';
import {contactContainer} from './contact.js';

// Initializes page content, only called once on start
function initialize(){
    replaceContent(baseContent, homeContainer);
}


function switchHomePage(){
    replaceContent(baseContent, homeContainer);
}

function switchMenuPage(){
    replaceContent(baseContent, menuContainer);
}

function switchContactPage(){
    replaceContent(baseContent, contactContainer);
}

initialize();

export {
    switchHomePage,
    switchMenuPage,
    switchContactPage,
};