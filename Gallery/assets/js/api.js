// UI Variables
let loaderOne = document.querySelector(".loader-one");
let loaderTwo = document.querySelector(".loader-two");
let loaderThree = document.querySelector(".loader-three");

let carouselItemOne = document.querySelector(".carousel-item-one");
let carouselItemTwo = document.querySelector(".carousel-item-two");
let carouselItemThree = document.querySelector(".carousel-item-three");

function getImages() {
  // let imageOne = document.querySelector(".image-one");
  // let imageTwo = document.querySelector(".image-two");
  // let imageThree = document.querySelector(".image-three");
  setImage(
    loaderOne,
    carouselItemOne,
    loaderTwo,
    carouselItemTwo,
    loaderThree,
    carouselItemThree
  );
}

async function getImage1() {
  let response = await fetch(
    "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
  );

  return response;
}

async function getImage2() {
  let response = await fetch(
    "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
  );

  return response;
}

async function getImage3() {
  let response = await fetch(
    "https://i.picsum.photos/id/10225/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
  );

  return response;
}

function setImage(
  loaderOne,
  carouselItemOne,
  loaderTwo,
  carouselItemTwo,
  loaderThree,
  carouselItemThree
) {
  getImage1().then((response) => {
    loaderOne.classList.add("hide");
    carouselItemOne.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
  });

  getImage2().then((response) => {
    loaderTwo.classList.add("hide");
    carouselItemTwo.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
  });

  getImage3()
    .then((response) => {
      loaderThree.classList.add("hide");
      carouselItemThree.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
    })
    .catch((e) => {
      console.log("Error");
    });
}
getImages();
