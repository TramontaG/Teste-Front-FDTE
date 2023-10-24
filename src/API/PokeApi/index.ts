import axios from "axios";
import { Pokemon } from "src/Models/Pokemon";
import { getRandomIntBetween } from "src/utils";

export const CreatePokeApi = () => {
    const PokeApi = axios.create({
        baseURL: "https://pokeapi.co/api/v2/"
    });

    const getRandomPokemon = async () => {
        const randomID = getRandomIntBetween(1, 807);
        const { data } = await PokeApi.get<Pokemon>(`/pokemon/${randomID}`);
        return data;
    }

    return {
        instance: PokeApi,
        getRandomPokemon,
    }
}