let main = document.querySelector("main");

for (let i in data.events) {
  createCard(data.events[i]);
}
main.innerHTML = newCardTemplate;
