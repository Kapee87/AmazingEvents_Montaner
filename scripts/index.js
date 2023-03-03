let main = document.querySelector("main");

for (let i in data.events) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardBodyTitle = document.createElement("h4");
  let cardBodyP = document.createElement("p");
  let cardFooter = document.createElement("div");
  let cardFooterH5 = document.createElement("h5");
  let cardFooterA = document.createElement("a");

  //asignacion de clases
  card.classList.add("card");
  img.className = "card-img mt-2";
  cardBodyTitle.classList.add("card-title");
  cardBodyP.classList.add("card-title");
  cardBody.className = "card-body d-flex flex-column align-items-center";
  cardFooter.className =
    "card-footer text-muted d-flex justify-content-between align-items-center";
  cardFooterA.className = "btn btn-dark";
  cardFooterA.textContent = "See more...";

//   console.table(data.events[i]);
  cardBodyTitle.textContent = data.events[i].name;
  cardBodyP.textContent = data.events[i].description;
  cardFooterH5.textContent = `$${data.events[i].price}`;
  img.src = data.events[i].image;
  cardFooterA.href= "./details.html"

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  cardBody.appendChild(cardBodyTitle);
  cardBody.appendChild(cardBodyP);
  cardFooter.appendChild(cardFooterH5);
  cardFooter.appendChild(cardFooterA);
  main.appendChild(card);
}
