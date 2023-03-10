let main = document.querySelector("main");

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  infoArray.forEach((element) => {
    newCardTemplate += createCard(element);
  });
  main.innerHTML = newCardTemplate;
}

loadIndexCards(data.events);
