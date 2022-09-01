import {
    buildHome
} from "./home-page.js";
import{
    buildMenu
} from "./menu-page.js";
import './styles.css';


buildNav();
buildHome();









function buildNav(){
    const contentContainer = document.getElementById('content');
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    homeTab.classList.add('tab');
    menuTab.classList.add('tab');
    contactTab.classList.add('tab');

    homeTab.addEventListener('click', buildHome)
    menuTab.addEventListener('click', buildMenu);

    homeTab.innerHTML = 'HOME';
    menuTab.innerHTML = 'MENU';
    contactTab.innerHTML = 'CONTACT';

    navContainer.appendChild(homeTab);
    navContainer.appendChild(menuTab);
    navContainer.appendChild(contactTab);
    

    contentContainer.appendChild(navContainer);
};