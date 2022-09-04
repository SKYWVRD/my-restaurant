import burger from '../images/burger.jpg'
import pizza from '../images/pizza.jpg'
import dessert from '../images/dessert.jpeg'
import{
    clearContent
} from "./util.js"



export const buildHome = (name) => {
    const mainContainer = document.getElementById('content');
    clearContent();
    const blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurb');
    const restuarantTitle = document.createElement('div');
    restuarantTitle.classList.add('title');
    restuarantTitle.innerHTML = 'Eat Some More'
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add('writeUp');
    writeUpContainer.innerHTML = `
    Welcome to Eat Some More <br />
    Our food has been carefully selected to ensure the finest dining experience and memories <br />
    So how about it, would you like to Eat Some More?
    `;
    const imageContainer = document.createElement('div');
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();
    image1.src = burger;
    image2.src = pizza;
    image3.src = dessert;
    image1.classList.add('home-image')
    image2.classList.add('home-image')
    image3.classList.add('home-image')
    imageContainer.classList.add('image-container');
    imageContainer.appendChild(image1);
    imageContainer.appendChild(image2);
    imageContainer.appendChild(image3);

    blurbContainer.appendChild(restuarantTitle);
    blurbContainer.appendChild(writeUpContainer);
    blurbContainer.appendChild(imageContainer);

    mainContainer.appendChild(blurbContainer);

}

