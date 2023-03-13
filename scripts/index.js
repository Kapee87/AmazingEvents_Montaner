let main = document.querySelector("main");

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

loadIndexCards(data.events);
