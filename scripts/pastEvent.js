const main = document.querySelector("main");
const pastArray = data.events.filter(
  (e) => Date.parse(data.currentDate) > Date.parse(e.date)
);

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
  main.innerHTML = newCardTemplate;
}

setArray(pastArray);
loadIndexCards(data.events);
