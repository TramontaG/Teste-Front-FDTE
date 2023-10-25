import { CenterContent } from "src/Components/CenterContent";
import { SideAddPokemonContainer } from "./styles";
import PlusIcon from "src/assets/images/plus.png";
import { PokeContext } from "../../Contexts/PokeContext";
import { Pokemon } from "src/Models/Pokemon";
import { getNextPokemonId } from "src/utils";

export const SideAddPokemon = () => {
  const {
    selectedPokemon: [, setSelectedPokemon],
    pokeList,
  } = PokeContext.useContext();

  // Temporary function just to make sure the context is working :)
  const createNewPokemon = async () => {
    const newPokemon: Pokemon = {
      id: getNextPokemonId(pokeList),
      isOfficial: false,

      name: "",
      hp: 0,
      height: 0,
      weight: 0,

      attack: 0,
      defense: 0,
      special_attack: 0,
      special_deffense: 0,
      speed: 0,

      abilities: [],
      types: [],

      sprites: {
        front_default: "",
        front_shiny: "",
      },
    };

    setSelectedPokemon(newPokemon);
  };

  return (
    <SideAddPokemonContainer onClick={createNewPokemon}>
      <CenterContent>
        <img src={PlusIcon} />
      </CenterContent>
    </SideAddPokemonContainer>
  );
};
