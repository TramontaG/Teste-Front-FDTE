import { Pokemon, PokemonFromApi } from "src/Models/Pokemon";
import { getPokemonAbilities, getPokemonStat, getPokemonTypes } from "src/utils";

export const PokeApiPokemon = (pokemon: PokemonFromApi): Pokemon => {
    console.log(pokemon);
    return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        sprites: pokemon.sprites,
        isOfficial: true,

        abilities: getPokemonAbilities(pokemon),

        types: getPokemonTypes(pokemon),

        attack: getPokemonStat(pokemon, "attack"),
        defense: getPokemonStat(pokemon, "defense"),
        special_attack: getPokemonStat(pokemon, "special-attack"),
        special_deffense: getPokemonStat(pokemon, "special-defense"),
        speed: getPokemonStat(pokemon, "speed"),
        hp: getPokemonStat(pokemon, "hp"),
    }
}