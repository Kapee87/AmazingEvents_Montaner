let apiWorking = true;
//modifcar el url para probar modo 'api caida'
let url = "https://mindhub-xj03.onrender.com/api/amazing";
let localUrl = "http://127.0.0.1:5501/scripts/amazing.json";

async function cargarData() {
  let dataTemp;
  try {
    dataTemp = await fetch(url)
      .then((res) => res.json())
      .then((datos) => (data = datos));
    apiWorking = true;
  } catch (error) {
    dataTemp = await fetch(localUrl)
      .then((res) => res.json())
      .then((datos) => (data = datos));
    apiWorking = false;
  }
  return dataTemp;
}

function checkApi() {
  if (apiWorking) {
    apiWorkingLabel.className = "d-none";
  } else {
    apiWorkingLabel.className =
      "text-warning apiNotWorking d-flex align-items-center";
  }
}
