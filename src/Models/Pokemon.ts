import PokemonTypes from 'src/strings/PokemonTypes.json';

export type NamedApiResource<Resources extends string = string> = {
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

export type Pokemon = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    types: {
        slot: number,
        type: NamedApiResource<keyof typeof PokemonTypes>,
    }[];
    sprites: {
        front_default: string,
        front_shiny: string,
    },
    stats: PokemonStat[];
    abilities: Ability[];
}