const main = document.querySelector("main");
let pastArray;
const apiWorkingLabel = document.getElementById("apiWorking");

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  if (infoArray === "") {
    newCardTemplate += createCard("");
  } else {
    infoArray.forEach((element) => {
      if (Date.parse(data.currentDate) > Date.parse(element.date)) {
        newCardTemplate += createCard(element);
      }
    });
  }
  // if (!apiWorking) {
  //   newCardTemplate = `<h3 class="text-danger-subtle col-12 apiNotWorking">Api not working, using local data instead</h3>
  //   ${newCardTemplate}`;
  // }
  main.innerHTML = newCardTemplate;
}

setSection("past");
