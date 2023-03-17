let main = document.querySelector("main");
let indexArray;

function loadIndexCards(infoArray) {
  let newCardTemplate = "";
  if (infoArray === "") {
    newCardTemplate += createCard("");
  } else {
    infoArray.forEach((element) => {
      newCardTemplate += createCard(element);
    });
  }
  if (!apiWorking) {
    newCardTemplate = `<h3 class="text-danger-subtle col-12 apiNotWorking">Api not working, using static data instead</h3>
    ${newCardTemplate}`;
  }
  main.innerHTML = newCardTemplate;
}

setSection("index");
