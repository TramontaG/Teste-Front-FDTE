
export type NamedApiResource = {
    name: string,
    url: string,
}

export type Pokemon = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weigth: number,
    types: {
        slot: number,
        type: NamedApiResource,
    }[];
    sprites: {
        front_default: string,
        front_shiny: string,
    }
}