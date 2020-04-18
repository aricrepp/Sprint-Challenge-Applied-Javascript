/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent(img){

  const carouselCon = document.createElement('div');
  carouselCon.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  leftBtn.textContent = '<';
  carouselCon.appendChild(leftBtn);

  // const imgOne = document.createElement('img');
  // imgOne.src = img;
  // carouselCon.appendChild(imgOne);

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.textContent = '>';
  carouselCon.appendChild(rightBtn);

  return carouselCon;

}

let images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];



const newContainer = document.querySelector('.carousel-container');
const car = document.querySelector('.carousel');
const left = document.querySelector('.left-button');
const right = document.querySelector('.right-button');

car.addEventListener('click', (e) => {

});

const newCarousel = carouselComponent();
newContainer.appendChild(newCarousel);