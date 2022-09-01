import {
    clearContent
} from "./util.js";

export const buildContacts = () => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const menuList = document.createElement('div')
    menuList.innerHTML = 'This is a contact page';

    mainContainer.appendChild(menuList);
}