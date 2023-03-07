//variable declaration
let categoryArray = [];
let categoryTemplate = "";
let categoryForm = document.querySelector(".categoryForm");
let newCardTemplate = "";

//function declaration
function fillCategoryArray() {
  for (let i in data.events) {
    if (!categoryArray.includes(data.events[i].category)) {
      categoryArray.push(data.events[i].category);
    }
  }
}
function createCategorys(categoryParam) {
  categoryTemplate += `
  <label class="d-flex gap-2">
  <input type="checkbox" class="form-check-input me-sm-2"> 
  <p>${categoryParam}</p>
  </label>
  `;
}

function createCard(dataParam) {
  console.log(dataParam);
  newCardTemplate += `
<div class="card border-light p-3 justify-content-between">
<div class="card-body d-flex flex-column align-items-center">
<a class="card-img mt-2" href="./details.html?id=${dataParam._id}" role="button"><img src="${dataParam.image}" alt="${dataParam.name}"></a>
    <h4 class="card-title">${dataParam.name}</h4>
    <p class="card-text">${dataParam.description}</p>
</div>
<div class="card-footer text-muted d-flex justify-content-between align-items-center">
    <h5>Price $${dataParam.price}</h5>
    <a class="btn btn-dark" href="./details.html?id=${dataParam._id}" role="button">See more...</a>
</div>
</div>
`;
}

//implement
fillCategoryArray();
for (let i in categoryArray) {
  createCategorys(categoryArray[i]);
}
categoryForm.innerHTML = categoryTemplate;
