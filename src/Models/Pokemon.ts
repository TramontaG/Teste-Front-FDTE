import PokemonTypes from 'src/strings/PokemonTypes.json';

export type PokemonType = keyof typeof PokemonTypes;


export type NamedApiResource<Resources = string> = {
    name: Resources,
    url: string,
}

export type PokemonStat = {
    base_stat: number,
    effort: number,
    stat: NamedApiResource;
}

export type Ability = {
    ability: NamedApiResource
    is_hidden: boolean;
    slot: number;
}

export type PokemonFromApi = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    types: {
        slot: number,
        type: NamedApiResource<PokemonType>
    }[];
    sprites: {
        front_default: string,
        front_shiny: string,
    },
    stats: PokemonStat[];
    abilities: Ability[];
}

export type Pokemon = {
    id: number;
    name: string;
    /**
     * If the pokemon comes from PokeApi. False when pokemon is created by the user
     */
    isOfficial: boolean;
    /**
     * In meters
     */
    height: number;
    /**
     * In Kilograms
     */
    weight: number;

    types: PokemonType[];

    sprites: {
        front_default: string;
        front_shiny: string;
    }

    abilities: string[];

    hp: number;
    attack: number;
    defense: number;
    special_deffense: number;
    special_attack: number;
    speed: number;
}
