const categoryList = document.querySelector("#categories");

const categoryItems = categoryList.querySelectorAll("#categories > li");

const categoryCount = categoryItems.length;

console.log("Number of categories:", categoryCount);

for (let i = 0; i < categoryCount; i += 1) {
  const categoryTitle = categoryItems[i].firstElementChild.textContent;
  console.log("Category:", categoryTitle);
}
