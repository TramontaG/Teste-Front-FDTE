import { Pokemon, PokemonFromApi, PokemonType } from "src/Models/Pokemon";

export const getRandomIntBetween = (min: number, max: number) => {
    const range = max - min;

    const randomNumberInRange = Math.round(Math.random() * range);

    return min + randomNumberInRange;
}


export const getPokemonStat = (pokemon: PokemonFromApi, desiredStat: string) => {
    const stat = pokemon.stats.find((stat) => stat.stat.name === desiredStat)!;
    return stat.base_stat;
};

export const getPokemonTypes = (pokemon: PokemonFromApi): PokemonType[] => {
    return pokemon.types.map(type => type.type.name);
}

export const getPokemonAbilities = (pokemon: PokemonFromApi) => {
    return pokemon.abilities.map(ability => ability.ability.name);
}

/**
 * Used to get a new unique pokemon ID for when the user wants to
 * create a brand new pokemon.
 * @param pokeList 
 * @returns 
 */
export const getNextPokemonId = (pokeList: Pokemon[]) => {
    const allIds = pokeList.map(pokemon => pokemon.id);
    const maxId = Math.max(...allIds);

    if (maxId < 1000) {
        return 1000;
    }

    return maxId + 1;
}