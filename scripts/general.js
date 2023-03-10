//variable declaration
let categoryForm = document.querySelector(".categoryForm");
let categoryArray = [];
let categoryTemplate = "";
let buscarNombre = document.querySelector("#buscarNombre");
let submitBtn = document.querySelector("#submitBtn");
//function declaration
function fillCategoryArray() {
  data.events.forEach((element) => {
    if (!categoryArray.includes(element.category)) {
      categoryArray.push(element.category);
    }
  });
}
function createCategorys(categoryParam) {
  categoryTemplate += `
  <label class="d-flex gap-2" onclick='{()=>console.log("pupiii")}'>
  <input value= ${categoryParam} type="checkbox" class="form-check-input me-sm-2" onclick="categoryFilterArraySwitch(event.target)"> 
  <p>${categoryParam}</p>
  </label>
  `;
}

function createCard(dataParam) {
  let newCardTemplate = "";
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
  return newCardTemplate;
}

function mainClean() {
  main.innerHTML = "";
  newCardTemplate = "";
}

//implement
fillCategoryArray();
categoryArray.forEach((category) => createCategorys(category));
categoryForm.innerHTML = categoryTemplate;

let nameFilter = [];
buscarNombre.addEventListener("keyup", (e) => {
  
   nameFilter = data.events.filter((ev) =>
     ev.name.toLowerCase().includes(e.target.value.toLowerCase())
   );
   mainClean();
   console.log(
     e.target.value === ''
   );
   loadIndexCards(nameFilter);
});
// buscarNombre.addEventListener("bac")

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("lala");
});
