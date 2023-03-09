const PokeApi = require("./pokeApi");
const Service = require("./service");

function createService() {
  const pokeApi = new PokeApi();
  return new Service({ repository: pokeApi });
}

module.exports = {
  createService,
};
