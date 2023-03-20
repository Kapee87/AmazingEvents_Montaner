let main = document.querySelector("main");
let upcomingArray;
const apiWorkingLabel = document.getElementById("apiWorking");

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  if (infoArray === "") {
    newCardTemplate += createCard("");
  } else {
    infoArray.forEach((element) => {
      if (Date.parse(data.currentDate) < Date.parse(element.date)) {
        newCardTemplate += createCard(element);
      }
    });
  }
  // if (!apiWorking) {
  //   newCardTemplate = `<h3 class="text-danger-subtle col-12 apiNotWorking">Api not working, using static local instead</h3>
  //   ${newCardTemplate}`;
  // }
  main.innerHTML = newCardTemplate;
}

setSection("upcoming");
