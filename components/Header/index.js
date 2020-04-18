// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const headDiv = document.createElement('div');
    headDiv.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'SMARCH 28, 2019';
    headDiv.appendChild(dateSpan);

    const headline = document.createElement('h1');
    headline.textContent = 'Lambda Times';
    headDiv.appendChild(headline);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = `98°`;
    headDiv.appendChild(temp);

    return headDiv;
}

const newHeader = document.querySelector('.header-container');
const headerComp = Header();
newHeader.appendChild(headerComp);
