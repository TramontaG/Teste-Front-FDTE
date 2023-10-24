import { Pokemon } from "src/Models/Pokemon";

export const getRandomIntBetween = (min: number, max: number) => {
    const range = max - min;

    const randomNumberInRange = Math.round(Math.random() * range);

    return min + randomNumberInRange;
}


export const getPokemonStat = (pokemon: Pokemon, desiredStat: string) => {
    const hpStat = pokemon.stats.find((stat) => stat.stat.name === desiredStat)!;
    return hpStat.base_stat;
};