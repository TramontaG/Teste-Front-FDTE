import { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
import { Pokemon } from "src/Models/Pokemon";

export type PokeContextValue = {
  pokeList: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
};

const _Context = createContext<PokeContextValue>(null!);

export type PokeContextProps = PropsWithChildren;

const PokeContextProvider = ({ children }: PokeContextProps) => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);

  const addPokemon = (pokemon: Pokemon) => {
    if (pokeList.length >= 6) {
      return;
    }
    setPokeList([...pokeList, pokemon]);
  };

  const removePokemon = (pokemon: Pokemon) => {
    setPokeList((oldList) => oldList.filter((p) => p.id !== pokemon.id));
  };

  return (
    <_Context.Provider value={{ pokeList, addPokemon, removePokemon }}>
      {children}
    </_Context.Provider>
  );
};

export const PokeContext = {
  useContext: () => useContext(_Context),
  provider: PokeContextProvider,
};
