import axios from "axios";
import { PokemonFromApi } from "src/Models/Pokemon";
import { getRandomIntBetween } from "src/utils";
import { PokeApiPokemon } from "./dto";

export const CreatePokeApi = () => {
    const PokeApi = axios.create({
        baseURL: "https://pokeapi.co/api/v2/"
    });

    const getRandomPokemon = async () => {
        const randomID = getRandomIntBetween(1, 807);
        const { data } = await PokeApi.get<PokemonFromApi>(`/pokemon/${randomID}`);
        return PokeApiPokemon(data);
    }

    return {
        instance: PokeApi,
        getRandomPokemon,
    }
}