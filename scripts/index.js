let main = document.querySelector("main");
const indexArray = data.events;

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  if (infoArray === "") {
    newCardTemplate += createCard("");
  } else {
    infoArray.forEach((element) => {
      newCardTemplate += createCard(element);
    });
  }
  main.innerHTML = newCardTemplate;
}

setArray(indexArray);
loadIndexCards(indexArray);
