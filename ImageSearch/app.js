const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imagesWrapper = document.querySelector(".images-wrapper");

runEventListeners();

function runEventListeners() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clear);
}
//function for searching an image //
function search(e) {
  e.preventDefault();
  const value = searchInput.value.trim();
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      //Authorization: Client-ID YOUR_ACCESS_KEY
      Authorization: "Client-ID Jiddi8veDTbbOUY50K6QjpnQ4sQ56EaGFV9hIycVazI",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const imageList = data.results;
      imageList.forEach((image) => {
        addImageToUI(image.urls.small);
      });
    })
    .catch((error) => console.log(error));
}

//function for showing image on the page  //
function addImageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.height = "300";
  img.width = "300";

  div.appendChild(img);
  imagesWrapper.appendChild(div);
}

//function for removing image and keyword  //
function clear(e) {
  e.preventDefault();
  searchInput.value = "";
  //? imagesWrapper.children: reach each children inside of the div
  //? forEach: to get each children to remove
  // Array.from(imagesWrapper.children).forEach((image) => image.remove());

  //? innerHTML= ""; to delete all codes inside imagesWrapper

  imagesWrapper.innerHTML = "";
}
