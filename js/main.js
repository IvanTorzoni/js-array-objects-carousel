const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Cerco il div che contiene le immagini a HTML
const imageSlider = document.querySelector(".my-carousel-images")
// Log alla console
console.log(imageSlider);

// Eseguo un ciclo che, per ogni object dell'array mi prende i singoli elementi all' interno degli object e me li stampa in HTML
images.forEach((curImage) => {
  // log alla console per visualizzare gli elementi
  console.log(curImage);

  // Stampa in HTML
  imageSlider.innerHTML += `
  <div class="my-carousel-item" carousel-item="1">  
  <img
    class="img-fluid"
    src="${curImage.image}"
    alt="${curImage.title} picture"
  />
  <div class="item-description px-3">
    <h2>${curImage.title}</h2>
    <p>
      ${curImage.text}
    </p>
  </div>
</div>
  `
})

// Seleziono le immagini (da gestire la classe active per la visualizzazione)
const carouselItem = document.querySelectorAll(".my-carousel-item");
console.log(carouselItem);

// Creo l'index che mi servirà per indicare quale immagine è visibile
let activeImgIndex = 0;

// Assegno la classe alla prima immagine
carouselItem[activeImgIndex].classList.add("active");
