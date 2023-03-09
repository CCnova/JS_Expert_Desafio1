class Service {
  constructor({ repository }) {
    this.repository = repository;
  }

  getRandomPokemonName(pokemons) {
    const index = Math.floor(Math.random() * pokemons.length);
    return pokemons[index].name;
  }

  async getTeam() {
    const pokemons = await this.repository.getPokemons();

    const pokemonsPromises = Array.from({ length: 3 }).map((_) => {
      const name = this.getRandomPokemonName(pokemons);

      return this.repository.getPokemon(name);
    });

    const result = await Promise.all(pokemonsPromises);
    return result;
  }
}

module.exports = Service;
