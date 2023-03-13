//variable declaration
const categoryForm = document.querySelector(".categoryForm");
const buscarNombre = document.querySelector("#buscarNombre");
const submitBtn = document.querySelector("#submitBtn");
let categoryArray = [];
let nameFilter = [];
let categoryFilterArray = [];
let filteredEvents = data.events;
let categoryTemplate = "";

//function declaration
function fillCategoryArray() {
  data.events.forEach((element) => {
    if (!categoryArray.includes(element.category)) {
      categoryArray.push(element.category);
    }
  });
}

function createCategorys(categoryParam) {
  let valueCat = categoryParam.toLowerCase();
  categoryTemplate += `
  <label class="d-flex gap-2"' >
  <input value= "${valueCat}" type="checkbox" class="form-check-input me-sm-2" onclick='categoryHandler(event)' > 
  <p>${categoryParam}</p>
  </label>
  `;
}

function createCard(dataParam) {
  let newCardTemplate = "";
  if (dataParam === "") {
    newCardTemplate += `
  <h4 class="text-light">No se encontraron coincidencias</h4>
  `;
  } else {
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
  return newCardTemplate;
}
function loadFilteredCard(filteredArray) {
  console.log(filteredArray.length);
  console.log(categoryFilterArray.length);
  console.log(buscarNombre.value === "");
  if (
    filteredArray.length === 0 &&
    categoryFilterArray.length > 0 &&
    buscarNombre.value === ""
  ) {
    loadIndexCards(data.events);
  } else if (
    filteredArray.length === 0 &&
    (categoryFilterArray !== 0 || buscarNombre.value !== 0)
  ) {
    loadIndexCards("");
  } else {
    loadIndexCards(filteredArray);
  }
}

function mainClean() {
  main.innerHTML = "";
  newCardTemplate = "";
}

function checkChecked(e) {
  let catPicked = e.target.value;
  if (e.target.checked) {
    categoryFilterArray.push(catPicked.toLowerCase());
  } else {
    categoryFilterArray = categoryFilterArray.filter(
      (c) => c !== catPicked.toLowerCase()
    );
  }
}
function categoryHandler(e) {
  checkChecked(e);
  filter();
}
function filter() {
  searchValue = buscarNombre.value.toLowerCase();
  filteredEvents = data.events.filter((ev) => {
    // console.log(categoryFilterArray);
    return (
      (ev.name.toLowerCase().includes(searchValue) ||
        ev.description.toLowerCase().includes(searchValue)) &&
      (categoryFilterArray.length === 0 ||
        categoryFilterArray.includes(ev.category.toLowerCase()))
    );
  });

  loadFilteredCard(filteredEvents);
  /*
  let filteredEventsArray = eventsData.events.filter(each => {
    return (
      (each.name.toLowerCase().includes(textInput)  (each.description.toLowerCase().includes(textInput)))
      && 
      (checks.length === 0  checks.includes(each.category))
    )
  })

  if (filteredEventsArray.length > 0) {
    renderEvents("#cards", filteredEventsArray)
  } else {
    renderEvents("#cards", [])
  }
  */
}

//event Listeners
buscarNombre.addEventListener("keyup", (e) => {
  // console.log(buscarNombre.value ? true : false);
  filter();
});

//implement
fillCategoryArray();
categoryArray.forEach((category) => createCategorys(category));
categoryForm.innerHTML = categoryTemplate;








/* 
function loadFilteredCard(filteredArray) {
  if (filteredArray.length === 0) {
    loadCards("empty");
  } else {
    loadCards(filteredArray);
  }
}
function categoryFilter(event) {
  
  mainClean();
  cardFiltered(categoryFilterArray);
  loadFilteredCard(filteredCategories);
  
}
function cardFiltered(filterArray) {
  let temp = [];
  filteredCategories = [];
  filterArray.forEach((cat) => {
    temp = data.events.filter((event) =>
      event.category.toLowerCase().includes(cat)
    );
    filteredCategories = filteredCategories.concat(temp);
  });
  if (filteredCategories.length === 0) {
    filteredCategories = data.events;
  }
}
function nameFiltered(value) {
  nameFilter = filteredCategories.filter((ev) =>
    ev.name.toLowerCase().includes(value.toLowerCase())
  );
  mainClean();
  loadFilteredCard(nameFilter);
}
*/
