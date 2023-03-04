

let categoryArray = [];

for (let i in data.events) {
  if (!categoryArray.includes(data.events[i].category)) {
    categoryArray.push(data.events[i].category);
  }
}

for (let i in categoryArray) {
  let categoryForm = document.querySelector(".categoryForm");
  let categoryLabel = document.createElement("label");
  let categoryCheck = document.createElement("input");
  let categoryP = document.createElement("p");

  categoryCheck.type = "checkbox";
  categoryCheck.className = "form-check-input me-sm-2 ";
  categoryLabel.className = "d-flex gap-2"
  categoryP.textContent = categoryArray[i];

  categoryLabel.appendChild(categoryCheck);
  categoryLabel.appendChild(categoryP);
  categoryForm.appendChild(categoryLabel);
}
