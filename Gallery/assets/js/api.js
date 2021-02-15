// UI Variables
let loaderOne = document.querySelector(".loader-one");
let loaderTwo = document.querySelector(".loader-two");
let loaderThree = document.querySelector(".loader-three");
let loaderFour = document.querySelector(".loader-four");

let carouselItemOne = document.querySelector(".carousel-item-one");
let carouselItemTwo = document.querySelector(".carousel-item-two");
let carouselItemThree = document.querySelector(".carousel-item-three");
let carouselItemFour = document.querySelector(".carousel-item-four");

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
    carouselItemThree,
    loaderFour,
    carouselItemFour
  );
}

async function Image1() {
  let response = await fetch(
    "https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY"
  );

  return response;
}

async function Image2() {
  let response = await fetch(
    "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
  );

  return response;
}

async function Image3() {
  let response = await fetch(
    "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
  );

  return response;
}


async function Image4() {
  let response = await fetch(
    "https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY"
  );

  return response;
}

function setImage(
  loaderOne,
  carouselItemOne,
  loaderTwo,
  carouselItemTwo,
  loaderThree,
  carouselItemThree,
  loaderFour,
  carouselItemFour
) {
  Image1().then((response) => {
    loaderOne.classList.add("hide");
    carouselItemOne.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
  });

  Image2().then((response) => {
    loaderTwo.classList.add("hide");
    carouselItemTwo.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
  });

  Image3()
    .then((response) => {
      loaderThree.classList.add("hide");
      carouselItemThree.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
    })
    Image4()
    .then((response) => {
      loaderFour.classList.add("hide");
      carouselItemFour.innerHTML = ` <img src=${response.url} class="d-block w-100 img-fluid image-one" alt="..." /> `;
    })
    
    .catch((e) => {
      console.log("Error");
    });
}
getImages();
