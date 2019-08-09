// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
window.addEventListener('load', (e) => {
function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
   //////
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);
   ////////
   header.classList.add('header');
   date.classList.add('date');
   temp.classList.add('temp');
   //////
   date.textContent = "MARCH 28, 2019";
   h1.textContent = "Lambda Times";
   temp.textContent = "98°";

   return header
}

const headerContainer = document.querySelector('.header-container');


console.log(headerContainer)


headerContainer.appendChild(Header());


//////////////////////




    axios.get('https://dog.ceo/api/breed/mastiff/images/random/1')
    .then( (response) => {
      console.log(response)
      response.data.message.forEach(element =>{
          let newDog = createCarousel(element);
      document.querySelector(".carousel-container").appendChild(newDog);
    })
    })
     .catch( error => {
        console.log("Error:", error);
      })
    
    
    function createCarousel (doggo) {
      const carousel = document.createElement('div');
      const leftButton = document.createElement('div');
      const img1 = document.createElement('img');
      const img2 = document.createElement('img');
      const img3 = document.createElement('img');
      const img4 = document.createElement('img');
      const rightButton = document.createElement('div');
    ///////////
    carousel.appendChild(leftButton);
    carousel.appendChild(img1);
    carousel.appendChild(img2);
    carousel.appendChild(img3);
    carousel.appendChild(img4);
    carousel.appendChild(rightButton);
    ////////////
    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');
    img1.classList.add('img');
    img2.classList.add('img');
    img3.classList.add('img');
    img4.classList.add('img');
    ////////////
    leftButton.textContent = "click!";
    img1.src = doggo;
    img2.src = doggo;
    img3.src = doggo;
    img4.src = doggo;
    rightButton.textContent = "click!";
    
    return carousel;
    }
    
});