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

// Cerco il div che contiene le immagini thumbnail a HTML
const imageSliderThumbnail = document.querySelector(".my-thumbnails")
// Log alla console
console.log(imageSliderThumbnail);

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

// Eseguo un ciclo che, per ogni object dell'array mi prende i singoli elementi all' interno degli object e me li stampa in HTML
images.forEach((curImage) => {
  // log alla console per visualizzare gli elementi
  console.log(curImage);

  // Stampa in HTML delle thumbnail
  imageSliderThumbnail.innerHTML += `
  <img
    class="img-fluid my-thumbnail"
    src="${curImage.image}"
    alt="${curImage.title} picture"
    />
  `
})

// Seleziono le immagini (da gestire la classe active per la visualizzazione)
const carouselItem = document.querySelectorAll(".my-carousel-item");
console.log(carouselItem);

// Seleziono le immagini per le thumbnail (da gestire la classe active per la visualizzazione)
const carouselItemThumbnail = document.querySelectorAll(".my-thumbnail");
console.log(carouselItemThumbnail);

// Creo l'index che mi servirà per indicare quale immagine è visibile
let activeImgIndex = 0;

// Creo l'index che mi servirà per indicare quale thumbnail è visibile
let activeImgThumbnailIndex = 0;

// Assegno la classe alla prima immagine
carouselItem[activeImgIndex].classList.add("active");
// Assegno la classe alla prima thumbnail
carouselItemThumbnail[activeImgThumbnailIndex].classList.add("active");



// Creo la funzione per andare avanti
// Cerco il pulsante nel file HTML e gli assegno l'evento al click
const fwdBtn = document.querySelector(".my-next-hook").addEventListener("click", () => {
  // Rimuovo la classe dalla immagine corrente 
  carouselItem[activeImgIndex].classList.remove("active");
  // Rimuovo la classe dalla thumbnail corrente 
  carouselItemThumbnail[activeImgThumbnailIndex].classList.remove("active");
  // Se l'indice dell'immagine è minore della lungezza dell'array
  if (activeImgIndex < images.length - 1) {
    // incremento l'indice
    activeImgIndex++;
    activeImgThumbnailIndex++;
    // altrimenti 
  } else {
    //riporto l'indice a zero
    activeImgIndex = 0
    activeImgThumbnailIndex = 0
  }
  // assegno la classe active all'immagine tramite indice che incrementa
  carouselItem[activeImgIndex].classList.add("active");
  // assegno la classe active alla thumbnail tramite indice che incrementa
  carouselItemThumbnail[activeImgThumbnailIndex].classList.add("active");
})
// console.log(fwdBtn);

// Creo la funzione per andare indietro
// Cerco il pulsante nel file HTML e gli assegno l'evento al click
const bwdBtn = document.querySelector(".my-prev-hook").addEventListener("click", () => {
  // Rimuovo la classe dalla immagine corrente 
  carouselItem[activeImgIndex].classList.remove("active");
  // Rimuovo la classe dalla thumbnail corrente 
  carouselItemThumbnail[activeImgThumbnailIndex].classList.remove("active");

  // Se l'indice dell'immagine è maggiore di 0
  if (activeImgIndex > 0) {
    // decremento l'indice
    activeImgIndex--;
    activeImgThumbnailIndex--;
    // altrimenti 
  } else {
    // riporto l'indice al valore dell' ultima immagine
    activeImgIndex = images.length - 1;
    // riporto l'indice al valore dell' ultima thumbnail
    activeImgThumbnailIndex = images.length -1;
  }
  // assegno la classe active all'immagine tramite indice che decrementa
  carouselItem[activeImgIndex].classList.add("active");
  // assegno la classe active alla thumbnail tramite indice che decrementa
  carouselItemThumbnail[activeImgThumbnailIndex].classList.add("active");

})
// console.log(bwdBtn);