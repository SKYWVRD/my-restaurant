import background from '../images/neonrest.jpg';

export const buildPage = (name) => {
    const mainContainer = document.getElementById('content');

    const blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurb');
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add('writeUp');
    const imageContainer1 = document.createElement('div');
    const imageContainer2 = document.createElement('div');
    const imageContainer3 = document.createElement('div');
    imageContainer1.classList.add('small-image');
    


    mainContainer.appendChild(blurbContainer);

}

