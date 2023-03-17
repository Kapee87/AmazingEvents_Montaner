//variable declaration
const categoryForm = document.querySelector(".categoryForm");
const buscarNombre = document.querySelector("#buscarNombre");
const submitBtn = document.querySelector("#submitBtn");
let eventArray;
let categoryArray = [];
let nameFilter = [];
let categoryFilterArray = [];
let filteredEvents = data.events;
let categoryTemplate = "";
let section = "index";

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
  <h4 class="text-light">Not Found</h4>
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
  filteredEvents = eventArray.filter((ev) => {
    return (
      ev.name.toLowerCase().includes(searchValue) &&
      (categoryFilterArray.length === 0 ||
        categoryFilterArray.includes(ev.category.toLowerCase()))
    );
  });

  loadFilteredCard(filteredEvents);
}
function setArray(array) {
  if (section === "index") {
    eventArray = array.map((e) => e);
  } else if (section === "past") {
    eventArray = array.filter(
      (e) => Date.parse(data.currentDate) > Date.parse(e.date)
    );
  } else if (section === "upcoming") {
    eventArray = array.filter(
      (e) => Date.parse(data.currentDate) < Date.parse(e.date)
    );
  }
  console.log(eventArray);
}
function setSection(sectionSetter) {
  section = sectionSetter;
}

//event Listeners
buscarNombre.addEventListener("keyup", (e) => {
  // console.log(buscarNombre.value ? true : false);
  filter();
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainClean();
  // setTimeout(()=> {filter}, 5);
  setTimeout(() => {
    filter();
  }, 300);
  if (filteredEvents.length === 0) {
    Swal.fire(
      "What you are looking for to make sense of the maelstrom you interpret as life, it is not located in this humble website.",
      "=D",
      "info"
    );
    buscarNombre.value = "";
    let checks = document.querySelectorAll("input[type=checkbox]");
    checks.forEach((check) => (check.checked = false));
    categoryFilterArray = [];
  }
});

//implement
async function start() {
  data = await cargarData();
  console.log(data);
  eventArray = data.events.map((e) => e);
  fillCategoryArray();
  categoryArray.forEach((category) => createCategorys(category));
  categoryForm.innerHTML = categoryTemplate;
  indexArray = data.events;
  setArray(indexArray);
  loadIndexCards(indexArray);
}

start();
