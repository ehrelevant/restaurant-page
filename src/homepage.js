
let homepageQueue = [];

function loadHome() {
    const name = document.createElement('h1');
    name.textContent = 'Generic Dinner';

    const tagline = document.createElement('h2');
    tagline.textContent = 'Only the best at being a Dinner';

    const subtag = document.createElement('h3');
    subtag.textContent = 'The only dinner that looks exactly the same as the last 5 dinners you\'ve entered';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'See Our Menu';

    homepageQueue.push(name, tagline, subtag, menuBtn)
}

loadHome()

export {homepageQueue};