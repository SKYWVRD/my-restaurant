import {
    buildPage
} from "./home-page.js";
import './styles.css';


buildNav();
buildPage();









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

    homeTab.innerHTML = 'HOME';
    menuTab.innerHTML = 'MENU';
    contactTab.innerHTML = 'CONTACT';

    navContainer.appendChild(homeTab);
    navContainer.appendChild(menuTab);
    navContainer.appendChild(contactTab);
    

    contentContainer.appendChild(navContainer);
}