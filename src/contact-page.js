import {
    clearContent
} from "./util.js";

export const buildContacts = () => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const contactList = document.createElement('div')
    contactList.classList.add('blurb')
    contactList.innerHTML = 'This is a contact page';

    mainContainer.appendChild(contactList);
}