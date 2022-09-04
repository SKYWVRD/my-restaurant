import {
    clearContent
} from "./util.js";

export const buildContacts = () => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const contactList = document.createElement('div')
    const contactTitle = document.createElement('div')
    const writeUp = document.createElement('div');
    contactList.classList.add('blurb')
    contactTitle.classList.add('title')
    contactTitle.innerHTML = 'Contact'

    contactList.appendChild(contactTitle);
    mainContainer.appendChild(contactList);
}