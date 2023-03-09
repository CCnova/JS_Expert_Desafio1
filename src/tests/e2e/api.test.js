const request = require("supertest");
const server = require("../../server");
const assert = require("assert");

describe("Api E2E Test", () => {
  describe("/", () => {
    it("should response with status code 200", async () =>
      await request(server).get("/").expect(200));
  });
  describe("/team", () => {
    it("should response with status code 200 and a list of pokemons", async () => {
      const response = await request(server).get("/team").expect(200);
      const pokemons = JSON.parse(response.text);

      assert.equal(pokemons.length > 0, true);
    });
  });
});
