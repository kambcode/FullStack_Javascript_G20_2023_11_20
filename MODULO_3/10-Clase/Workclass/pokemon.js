const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function main() {
  axios
    .get(API)
    .then((response) => {
      const pokemonName = response.data.results[0].name;
      //segunda promesa
      return axios.get(`${API}/${pokemonName}`);
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

main();
