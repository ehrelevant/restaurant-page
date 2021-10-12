import {appendChildren} from './helper.js'

import {switchMenuPage} from './index.js';

import Chicken from './images/chicken1.jpg';

function loadHome() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('page', 'home-page');


    const leftHome = document.createElement('div');
    leftHome.classList.add('left-home');

    const name = document.createElement('h1');
    name.textContent = 'Generic Dinner';

    const tagline = document.createElement('h2');
    tagline.textContent = 'Only the best at being a Dinner';

    const subtag = document.createElement('h3');
    subtag.textContent = 'The only dinner that looks exactly the same as the last five dinners you\'ve entered';


    const rightHome = document.createElement('div');
    rightHome.classList.add('right-home');

    const sampleImg = document.createElement('img');
    sampleImg.src = Chicken;
    sampleImg.classList.add('home-image')

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'See Our Menu';
    menuBtn.addEventListener('click', ()=>{
        switchMenuPage();
    });


    appendChildren(leftHome, [name, tagline, subtag])
    appendChildren(rightHome, [sampleImg, menuBtn])
    appendChildren(homeContainer, [leftHome, rightHome])
    return homeContainer;
}

const homeContainer = loadHome();

export {homeContainer};