// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
window.addEventListener('load', (e) => {

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( (response) => {
      console.log(response)
      response.data.articles.bootstrap.forEach(element => {
           let newCard = createCard(element);
      document.querySelector(".cards-container").appendChild(newCard);
   
      })
      response.data.articles.javascript.forEach(element => {
        let newCard = createCard(element);
   document.querySelector(".cards-container").appendChild(newCard);

   })
   response.data.articles.jquery.forEach(element => {
    let newCard = createCard(element);
document.querySelector(".cards-container").appendChild(newCard);

})
response.data.articles.node.forEach(element => {
    let newCard = createCard(element);
document.querySelector(".cards-container").appendChild(newCard);

})
response.data.articles.technology.forEach(element => {
    let newCard = createCard(element);
document.querySelector(".cards-container").appendChild(newCard);

})
     
  })
  .catch( error => {
    console.log("Error:", error);
  })

 







function createCard(object) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    //////

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    imgContainer.appendChild(img);

/////
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
/////
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    authorsName.textContent = object.authorName;
    return card;
}




});