import {
    clearContent
} from "./util.js";

export const buildMenu = () => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const menuList = document.createElement('div')
    menuList.innerHTML = 'This is a menu';

    mainContainer.appendChild(menuList);
}