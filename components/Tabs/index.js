// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function newTab(content){

    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = content;
    
    return tabDiv;
}

const topicsDiv = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    let newArray = response.data.topics;
    for(let i = 0; i < newArray.length; i++){
        const tab = newTab(newArray[i]);
        topicsDiv.appendChild(tab);
    }
})
.catch((err) =>{
    console.log(err);
});
