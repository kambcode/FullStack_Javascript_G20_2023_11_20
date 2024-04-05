const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  const response = await axios.get(API);

  // const arrayPromises = response.data.results.map((pokemon) => {
  //   return axios.get(`${API}/${pokemon.name}`);
  // });

  // const responses = await Promise.all(arrayPromises);

  const arrayRespuestas = [];

  for (let i = 0; i < response.data.results.length; i++) {
    try {
      arrayRespuestas.push(
        await axios.get(`${API}/${response.data.results[i].name}`)
      );
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  console.log(arrayRespuestas);
}

main();
