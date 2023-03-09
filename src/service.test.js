const assert = require("assert");
const Service = require("./service.js");
const pokemons = require("./tests/mocks/pokemons.json");
const validPokemon = require("./tests/mocks/valid-pokemon.json");
const { describe, it } = require("mocha");

describe("Service unit tests", () => {
  const MOCKS = {
    pokemons,
    validPokemon,
  };

  const repository = {
    getPokemons: () => MOCKS.pokemons,
    getPokemon: (_) => validPokemon,
  };
  const service = new Service({ repository });

  describe("getRandomPokemonName", () => {
    it("should return a random name from array of pokemons", () => {
      const actual = service.getRandomPokemonName(MOCKS.pokemons);

      const mockNames = MOCKS.pokemons.map((p) => p.name);

      assert.equal(mockNames.includes(actual), true);
    });
  });

  describe("getTeam", () => {
    it("should return a team of pokemons", async () => {
      const actual = await service.getTeam();
      const expectedToHaveActual = MOCKS.pokemons;

      assert.equal(
        actual.every((randomPoke) =>
          expectedToHaveActual.map((p) => p.name).includes(randomPoke.name)
        ),
        true
      );
    });
  });
});
