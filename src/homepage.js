import Chicken from './images/chicken1.jpg';
import {menuPageQueue} from './menu.js';
import {baseContent, appendNewContent} from './base.js'


let homePageQueue = [];

function loadHome() {
    const name = document.createElement('h1');
    name.textContent = 'Generic Dinner';

    const tagline = document.createElement('h2');
    tagline.textContent = 'Only the best at being a Dinner';

    const subtag = document.createElement('h3');
    subtag.textContent = 'The only dinner that looks exactly the same as the last 5 dinners you\'ve entered';

    const sampleImg = document.createElement('img');
    sampleImg.src = Chicken;
    sampleImg.classList.add('home-image')

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'See Our Menu';
    menuBtn.addEventListener('click', ()=>{
        appendNewContent(menuPageQueue, baseContent)
    });

    homePageQueue.push(name, tagline, subtag, sampleImg, menuBtn)
}

loadHome();

export {homePageQueue};