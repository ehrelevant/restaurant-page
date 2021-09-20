
let contactPageQueue = [];

function loadContact() {
    const author = document.createElement('p');
    author.textContent = 'Webpage by KindaExists/Sleepy';

    const landline = document.createElement('p');
    landline.textContent = '123-4567';

    const cellphone = document.createElement('p');
    cellphone.textContent = '+69 012-3456-789';

    const email = document.createElement('p');
    email.textContent = 'someplace@generic.com';

    contactPageQueue.push(author, landline, cellphone, email)
}

loadContact();

export {contactPageQueue};