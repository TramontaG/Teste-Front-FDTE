import { CenterContent } from "src/Components/CenterContent";
import { SideAddPokemonContainer } from "./styles";
import PlusIcon from "src/assets/images/plus.png";
import { PokemonApi } from "src/API";
import { PokeContext } from "../../Contexts/PokeContext";

export const SideAddPokemon = () => {
  const { addPokemon } = PokeContext.useContext();

  // Temporary function just to make sure the context is working :)
  const addRandomPokemon = async () => {
    const randomPokemon = await PokemonApi.getRandomPokemon();
    addPokemon(randomPokemon!);
  };

  return (
    <SideAddPokemonContainer onClick={addRandomPokemon}>
      <CenterContent>
        <img src={PlusIcon} />
      </CenterContent>
    </SideAddPokemonContainer>
  );
};
