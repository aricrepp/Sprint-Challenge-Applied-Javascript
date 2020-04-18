// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function newCard(headLine, url, author){

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = headLine;
    cardDiv.appendChild(headline);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    authorDiv.appendChild(imgDiv);

    const innerImg = document.createElement('img');
    innerImg.src = url;
    imgDiv.appendChild(innerImg);

    const authorName = document.createElement('span');
    authorName.textContent = `By: ${author}`
    authorDiv.appendChild(authorName);

    return cardDiv;
}

const tabBtn = document.querySelectorAll('.tabs');
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response);

    let newArray = response.data.articles.javascript;
    console.log("clicked");
    for(let i = 0; i < newArray.length; i++){
        const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
        cardContainer.appendChild(card);
    }

    tabBtn.forEach((el) => {
        el.addEventListener("click", (e) => {
            if(e.target.textContent === 'javascript'){
                document.querySelectorAll('.card').forEach(e => e.remove());
                console.log("javascript");
                let newArray = response.data.articles.javascript;
                console.log("clicked");
                for(let i = 0; i < newArray.length; i++){
                    const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
                    cardContainer.appendChild(card);
                }
            }
            if(e.target.textContent === 'bootstrap'){
                document.querySelectorAll('.card').forEach(e => e.remove());
                console.log("bootstrap");
                let newArray = response.data.articles.bootstrap;
                console.log("clicked");
                for(let i = 0; i < newArray.length; i++){
                    const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
                    cardContainer.appendChild(card);
                }
            }
            if(e.target.textContent === 'technology'){
                document.querySelectorAll('.card').forEach(e => e.remove());
                console.log("technology");
                let newArray = response.data.articles.technology;
                console.log("clicked");
                for(let i = 0; i < newArray.length; i++){
                    const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
                    cardContainer.appendChild(card);
                }
            }
            if(e.target.textContent === 'jquery'){
                document.querySelectorAll('.card').forEach(e => e.remove());
                console.log("jquery");
                let newArray = response.data.articles.jquery;
                console.log("clicked");
                for(let i = 0; i < newArray.length; i++){
                    const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
                    cardContainer.appendChild(card);
                }
            }
            if(e.target.textContent === 'node.js'){
                document.querySelectorAll('.card').forEach(e => e.remove());
                console.log("nodejs");
                let newArray = response.data.articles.node;
                console.log("clicked");
                for(let i = 0; i < newArray.length; i++){
                    const card = newCard(newArray[i].headline, newArray[i].authorPhoto, newArray[i].authorName);
                    cardContainer.appendChild(card);
                }
            }
        })
    })
    
})
.catch((err) => {
    console.log(err);
});