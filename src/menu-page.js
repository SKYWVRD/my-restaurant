import {
    clearContent
} from "./util.js";

export const buildMenu = () => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const menuList = document.createElement('div')
    menuList.classList.add('blurb');
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('title');
    menuTitle.innerHTML= 'Menu'
    menuList.append(menuTitle);

    mainContainer.appendChild(menuList);
}