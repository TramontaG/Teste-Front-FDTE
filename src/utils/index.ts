import { PokemonFromApi, PokemonType } from "src/Models/Pokemon";

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