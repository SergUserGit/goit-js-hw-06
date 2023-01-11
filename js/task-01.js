const categoryList = document.querySelector("#categories");

const categoryItems = categoryList.querySelectorAll("#categories > li");

const categoryCount = categoryItems.length;

console.log("Number of categories:", categoryCount);

console.log("");

for (let i = 0; i < categoryCount; i += 1) {
  const categoryTitle = categoryItems[i].firstElementChild.textContent;
  console.log("Category:", categoryTitle);

  const categoryTypeCount =
    categoryItems[i].lastElementChild.querySelectorAll("li").length;
  console.log("Elements:", categoryTypeCount);

  console.log("");
}
