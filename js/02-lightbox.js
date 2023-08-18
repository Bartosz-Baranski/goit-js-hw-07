import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector(".gallery");

function galleryCreate() {
  let galleryItem = [];

  galleryItems.forEach((e, idx) => {
    const { original, preview, description } = galleryItems[idx];
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    li.classList.add("gallery__item");
    a.classList.add("gallery__link");
    img.classList.add("gallery__image");

    a.setAttribute("href", original);
    img.setAttribute("src", preview);
    img.setAttribute("data-source", original);
    img.setAttribute("alt", description);

    li.append(a);
    a.append(img);

    galleryItem.push(li);
  });

  galleryImg.append(...galleryItem);
}
galleryCreate();
var lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: 250,
  disableScroll: true,
});
function openLightbox(e) {
  e.preventDeafault();
  if (e.taret.nodeName !== "IMG") {
    return;
  }
  lightbox.open(e.target);
}
