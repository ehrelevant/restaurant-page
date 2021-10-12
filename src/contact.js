
import {appendChildren} from './helper.js'

function loadContact() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('page', 'contact-page');

    const author = document.createElement('p');
    author.textContent = 'Webpage by KindaExists/Sleepy';
    author.classList.add('author-text')

    const landline = document.createElement('p');
    landline.textContent = '123-4567';

    const cellphone = document.createElement('p');
    cellphone.textContent = '+69 012-3456-789';

    const email = document.createElement('p');
    email.textContent = 'someplace@generic.com';

    appendChildren(contactContainer, [author, landline, cellphone, email]);
    return contactContainer;
}

const contactContainer = loadContact();

export {contactContainer};