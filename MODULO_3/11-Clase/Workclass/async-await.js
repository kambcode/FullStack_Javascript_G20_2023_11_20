// Async await
const { default: axios } = require("axios");

// Pasos de la tarea

// - traer los primeros 20 pokemons
// - guardar el resultado en una variable pokemon
// - iterar por cada pokemon y traer la info individual
// - actualizar el array pokemons

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  // Promises:
  //   axios
  //     .get(API)
  //     .then((response) => {
  //       console.log("RESPONSE 1: ", response.data);
  //       return axios.get(`${API}/${response.data.results[0].name}`);
  //     })
  //     .then((response) => {
  //       response.data;
  //     });

  // ASYNC AWAIT
  const response = await axios.get(API);

  console.log(response.data);

  const arrayPromises = response.data.results.map((pokemon) => {
    return axios.get(`${API}/${pokemon.name}`);
  });

  const responses = await Promise.all(arrayPromises);
}

main();
