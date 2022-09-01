import background from '../images/neonrest.jpg';
import{
    clearContent
} from "./util.js"

export const buildHome = (name) => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurb');
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add('writeUp');
    writeUpContainer.innerHTML = 'This is a write up';
    const imageContainer1 = document.createElement('div');
    const imageContainer2 = document.createElement('div');
    const imageContainer3 = document.createElement('div');
    imageContainer1.classList.add('small-image');


    
    blurbContainer.appendChild(writeUpContainer);

    mainContainer.appendChild(blurbContainer);

}

