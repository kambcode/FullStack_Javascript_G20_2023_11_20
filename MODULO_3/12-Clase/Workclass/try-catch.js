// Promesa:
// - una solicitud para hacer en un tiempo requerido. (tiene 3 estados: pending(pendiente) - fulfilled(completado) - rejected(rechazado))
// - respuesta a una petición que se realiza

const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  // PROMESAS

  //   axios
  //     .get(API)
  //     .then()
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });

  // ASYNC-AWAIT

  try {
    const response = await axios.get("https://lala.com"); // pending (pendiente)

    console.log(response.data); // fulfilled (completa)
  } catch (error) {
    console.log("YO SOY UN ERROR: ", error.message); // rejected (rechazado)
  }
}

main();

const getData = async () => {
  try {
    await axios.get("https://api-colombia.com/api/V1/Department");
  } catch (error) {
    console.log("YO SOY EL PRIMER ERROR: ", error.message);
  }

  try {
    await axios.get("https://pokeapi.co/api/v2/pokemon");
  } catch (error) {
    console.log("YO SOY OTRO ERROR: ", error.message);
  }
};

getData();
