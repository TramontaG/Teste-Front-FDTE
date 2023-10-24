import { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
import { Pokemon } from "src/Models/Pokemon";
export type PokeContextValue = {
  pokeList: Pokemon[];
  currentPokemon: [
    Pokemon | null,
    React.Dispatch<React.SetStateAction<Pokemon | null>>
  ];
  selectedPokemon: [
    Pokemon | null,
    React.Dispatch<React.SetStateAction<Pokemon | null>>
  ];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
  editPokemon: (id: number, newData: Partial<Pokemon>) => void;
};

const _Context = createContext<PokeContextValue>(null!);

export type PokeContextProps = PropsWithChildren;

const PokeContextProvider = ({ children }: PokeContextProps) => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const currentPokemon = useState<Pokemon | null>(null);
  const selectedPokemon = useState<Pokemon | null>(null);

  const addPokemon = (pokemon: Pokemon) => {
    if (pokeList.length >= 6) {
      return;
    }
    setPokeList([...pokeList, pokemon]);
  };

  const removePokemon = (pokemon: Pokemon) => {
    setPokeList((oldList) => oldList.filter((p) => p.id !== pokemon.id));
  };

  const editPokemon = (id: number, newData: Partial<Pokemon>) => {
    setPokeList((oldPokeList) =>
      oldPokeList.map((pokemon) => {
        if (pokemon.id === id) {
          return {
            ...pokemon,
            ...newData,
          };
        }
        return pokemon;
      })
    );
  };

  return (
    <_Context.Provider
      value={{
        pokeList,
        addPokemon,
        removePokemon,
        currentPokemon,
        selectedPokemon,
        editPokemon,
      }}
    >
      {children}
    </_Context.Provider>
  );
};

export const PokeContext = {
  useContext: () => useContext(_Context),
  provider: PokeContextProvider,
};
