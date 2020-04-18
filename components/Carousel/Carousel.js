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

function carouselComponent(){

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  carousel.appendChild(leftBtn);

  const imgOne = document.createElement('img');
  imgOne.src = './assets/carousel/mountains.jpeg';
  carousel.appendChild(imgOne);

  const imgTwo = document.createElement('img');
  imgTwo.src = './assets/carousel/computer.jpeg';
  carousel.appendChild(imgTwo);

  const imgThree = document.createElement('img');
  imgThree.src = './assets/carousel/trees.jpeg';
  carousel.appendChild(imgThree);

  const imgFour = document.createElement('img');
  imgFour.src = './assets/carousel/turntable.jpeg';
  carousel.appendChild(imgFour);

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  carousel.appendChild(rightBtn);

}


const container = document.querySelector('.carousel-container');
console.log(container);
const newCarousel = carouselComponent();
container.appendChild(newCarousel);