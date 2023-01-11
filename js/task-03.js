const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let textMurkup = "";

for (const img of images) {
  textMurkup += `<li><img src=${img.url} alt=${img.alt} width="300" height="200"></li>\n`;
}

const galleryList = document.querySelector(".gallery");
const galleryListStyle = galleryList.style;
galleryListStyle["list-style"] = "none";
galleryListStyle.display = "flex";
galleryListStyle.gap = "30px";

galleryList.insertAdjacentHTML("afterbegin", textMurkup);
