const PokeApi = require("./pokeApi");
const assert = require("assert");
const sinon = require("sinon");
const { describe, it, beforeEach } = require("mocha");

const MOCKS = {
  pokemons: require("./tests/mocks/pokemons.json"),
  pokemon: require("./tests/mocks/valid-pokemon.json"),
};

describe("PokeApi test suite", () => {
  const api = new PokeApi();

  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(global, "fetch");
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe("getPokemons", () => {
    it("should return array of pokemons", async () => {
      fetchStub.resolves({
        json: () => Promise.resolve({ results: MOCKS.pokemons }),
      });
      const actual = await api.getPokemons();

      assert.deepStrictEqual(actual, MOCKS.pokemons);
    });
  });

  describe("getPokemon", () => {
    it("should return a pokemon page", async () => {
      fetchStub.resolves({
        json: () => Promise.resolve(MOCKS.pokemon),
      });
      const actual = await api.getPokemon("bulbasaur");

      assert.equal(actual.name, "bulbasaur");
    });
  });
});
