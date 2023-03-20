const urlSearchParams = new URLSearchParams(window.location.search);
const apiWorkingLabel = document.getElementById("apiWorking");
let detailId = urlSearchParams.get("id");
let detailsEvent;
let tempContainer = "";
let main = document.querySelector("main");

function createDetailsCard() {
  tempContainer += `
<div class="container border rounded d-flex flex-column flex-lg-row gap-2 detailsContainer">
            <div class="detailsImg py-3 d-flex justify-content-center justify-content-lg-start align-items-lg-center">
                <img src="${
                  detailsEvent.image
                }" alt="details image" class="rounded" id="detailsImg">
            </div>
            <div class="detailsSubContainer d-flex flex-column gap-1">
                <div class="container-fluid pt-2 bg-success-subtle text-center rounded-3 mt-5">
                    <h3 id="detailName">${detailsEvent.name}</h3>
                </div>
                <ul>
                    <li>
                        <div class="listContainer">
                            <h5>Date :</h5>
                            <p id="detailDate">${detailsEvent.date}</p>
                        </div>
                    </li>
                    <li>
                        <div class="listContainer">
                            <h5>Description:</h5>
                            <p id="detailDescription">${
                              detailsEvent.description
                            }
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listContainer">
                            <h5>Category :</h5>
                            <p id="detailCategory">${detailsEvent.category}</p>
                        </div>
                    </li>
                    <li>
                        <div class="listContainer">
                            <h5>Place :</h5>
                            <p id="detailPlace">${detailsEvent.place}</p>
                        </div>
                    </li>
                    <li>
                        <div class="listContainer">
                            <h5>Capacity :</h5>
                            <p id="detailCapacity">${detailsEvent.capacity}</p>
                        </div>
                    </li>
                    <li>
                        <div class="listContainer">
                            <h5>${Object.keys(detailsEvent)[8]} :</h5>
                            <p id="detailEstimate">${
                              detailsEvent.estimate | detailsEvent.assistance
                            }</p>
                        </div>
                    </li>

                    <li>
                        <div class="listContainer">
                            <h5>Price :</h5>
                            <p id="detailPrice">${detailsEvent.price}</p>
                        </div>
                    </li>

                </ul>
            </div>
`;
  main.innerHTML = tempContainer;
}
let dataTemp;
async function filtrarPorId() {
  data = await cargarData();
  [detailsEvent] = await data.events.filter(
    (e) => e._id === parseInt(detailId)
  );
  // detailsEvent = data.events.filter((e) => e._id === parseInt(detailId));
  //   console.log(data);
  checkApi();
  createDetailsCard();
  
}

filtrarPorId();
