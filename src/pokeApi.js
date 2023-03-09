const API_URL = "https://pokeapi.co/api/v2";

class PokeApi {
  async getPokemons() {
    const responseStream = await fetch(`${API_URL}/pokemon`);
    const response = await responseStream.json();

    return response.results;
  }

  async getPokemon(name) {
    const responseStream = await fetch(`${API_URL}/pokemon/${name}`);
    const responseJson = await responseStream.json();
    return responseJson;
  }
}

module.exports = PokeApi;
