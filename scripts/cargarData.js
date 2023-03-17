let apiWorking = true;
//modifcar el url para probar modo 'api caida'
let url = "https://mindhub-xj03.onrender.com/api/amazing";

async function cargarData() {
  let dataTemp;
  try {
    dataTemp = await fetch(url)
      .then((res) => res.json())
      .then((datos) => (data = datos));
    apiWorking = true;
  } catch (error) {
    console.log(error);
    dataTemp = data;
    apiWorking = false;
  }
  return dataTemp;
}

function checkApi() {
  if (apiWorking) {
    apiWorkingLabel.className = "d-none";
  } else {
    apiWorkingLabel.className = "text-warning apiNotWorking";
  }
}