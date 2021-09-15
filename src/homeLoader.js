
const content = document.querySelector('#content')

export function loadHome() {
    const tagline = document.createElement('h1');
    tagline.textContent = 'We have it all';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Whether its filling delicacies or filler text';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'See Menu';

    content.appendChild(tagline);
    content.appendChild(subtitle);
    content.appendChild(menuBtn);
}