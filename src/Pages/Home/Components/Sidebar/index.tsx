import { ForEach } from "src/Components/ForEach";
import { PokeContext } from "../../Contexts/PokeContext";
import { FloatingSidebar } from "./styles";
import { SidePokeDisplay } from "../SidePokeDisplay";
import { Pokemon } from "src/Models/Pokemon";
import { SideAddPokemon } from "../SideAddPokemon";

// Declared outside the component to avoid having to recreate this function every render
const renderPokemon = (pokemon: Pokemon | undefined) => (
  <SidePokeDisplay key={pokemon?.id} pokemon={pokemon} />
);

export const SideBar = () => {
  const { pokeList } = PokeContext.useContext();

  // Makes sure the array is always length 6, extending it with undefined values;
  const normalizedPokeList = pokeList
    .concat(Array.from({ length: 6 }))
    .slice(0, 6);

  return (
    <FloatingSidebar>
      <ForEach data={normalizedPokeList} render={renderPokemon} />
      <SideAddPokemon />
    </FloatingSidebar>
  );
};
