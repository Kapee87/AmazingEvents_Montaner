let main = document.querySelector("main");

function loadIndexCards() {
  data.events.forEach((element) => {
    if (Date.parse(data.currentDate) < Date.parse(element.date)){
      createCard(element);
    }
  });
  main.innerHTML = newCardTemplate;
}

loadIndexCards();
