let main = document.querySelector("main");
let upcomingArray;

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
  if (!apiWorking) {
    newCardTemplate = `<h3 class="text-danger-subtle col-12">Api not working, using static data instead</h3>
    ${newCardTemplate}`;
  }
  main.innerHTML = newCardTemplate;
}

setSection("upcoming");
