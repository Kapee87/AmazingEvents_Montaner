let main = document.querySelector("main");
let indexArray;
const apiWorkingLabel = document.getElementById("apiWorking");

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  if (infoArray === "") {
    newCardTemplate += createCard("");
  } else {
    infoArray.forEach((element) => {
      newCardTemplate += createCard(element);
    });
  }
  // if (!apiWorking) {
  //   newCardTemplate = `<h3 class="text-danger-subtle col-12 apiNotWorking">Api not working, using local data instead</h3>
  //   ${newCardTemplate}`;
  // }
  main.innerHTML = newCardTemplate;
}

setSection("index");
