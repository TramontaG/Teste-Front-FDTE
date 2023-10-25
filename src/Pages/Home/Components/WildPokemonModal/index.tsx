import { PokeContext } from "../../Contexts/PokeContext";
import {
  Title,
  Subitlte,
  HorizontalContainer,
  SideBorderedDiv,
  HorizontalDivider,
  AbilityText,
  PokeballButton,
} from "./styles";

import PokeballImage from "src/assets/images/pokeball.png";

import { PokemonTypeTag } from "../PokemonTypeTag";
import { ForEach } from "src/Components/ForEach";
import { Modal } from "../Modal";

/**
 * If the currentPokemon is undefined, the modal is set to closed.
 */
export const WildPokemonModal = () => {
  const {
    currentPokemon: [currentPokemon, setCurrentPokemon],
    addPokemon,
  } = PokeContext.useContext();

  const closeModal = () => {
    setCurrentPokemon(null);
  };

  const capturePokemon = () => {
    addPokemon(currentPokemon!);
    closeModal();
  };

  if (!currentPokemon) {
    return null;
  }

  return (
    <Modal
      active={!!currentPokemon}
      closeModal={closeModal}
      action={
        <PokeballButton onClick={capturePokemon}>
          <img src={PokeballImage} />
        </PokeballButton>
      }
      pokemonSprite={currentPokemon.sprites.front_default}
    >
      <Title>{currentPokemon.name}</Title>
      <HorizontalContainer>
        <div>
          <Subitlte>HP</Subitlte>
          <Title>
            {currentPokemon.hp}/{currentPokemon.hp}
          </Title>
        </div>
        <SideBorderedDiv>
          <Subitlte>ALTURA</Subitlte>
          <Title>{currentPokemon.height} m</Title>
        </SideBorderedDiv>

        <div>
          <Subitlte>PESO</Subitlte>
          <Title>{currentPokemon.weight} kg</Title>
        </div>
      </HorizontalContainer>

      <HorizontalContainer>
        <HorizontalDivider />
        <Title>Tipo</Title>
        <HorizontalDivider />
      </HorizontalContainer>

      <HorizontalContainer>
        <PokemonTypeTag type={currentPokemon.types[0]} />
        <PokemonTypeTag type={currentPokemon.types[1]} />
      </HorizontalContainer>

      <HorizontalContainer>
        <HorizontalDivider />
        <Title>Habilidades</Title>
        <HorizontalDivider />
      </HorizontalContainer>

      <HorizontalContainer>
        <ForEach
          data={currentPokemon.abilities}
          render={(ability) => (
            <AbilityText key={ability}>{ability}</AbilityText>
          )}
        />
      </HorizontalContainer>
    </Modal>
  );
};
