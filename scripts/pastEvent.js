let main = document.querySelector("main");

for (let i in data.events) {
  if (Date.parse(data.currentDate) > Date.parse(data.events[i].date)) {
    createCard(data.events[i]);
  }
}

main.innerHTML = newCardTemplate;
