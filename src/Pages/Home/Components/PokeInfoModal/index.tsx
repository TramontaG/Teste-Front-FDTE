import { PokeContext } from "../../Contexts/PokeContext";
import { FloatingDiv } from "src/Components/FloatingDiv";
import {
  CloseModalButton,
  CloseModalContainer,
  CloseModalIcon,
  DarkenedBackground,
  PokeDetailsContainer,
  PokemonDataContainer,
  Title,
  PokemonSprite,
  PokemonSpriteHolder,
  Subitlte,
  HorizontalContainer,
  SideBorderedDiv,
  HorizontalDivider,
  AbilityText,
  PokeballButton,
  PokeballHolder,
} from "./styles";
import { CenterContent } from "src/Components/CenterContent";
import { MouseEventHandler } from "react";

import CloseModalIconImage from "src/assets/images/close.png";
import PokeballImage from "src/assets/images/pokeball.png";

import { Pokemon } from "src/Models/Pokemon";
import { PokemonTypeTag } from "../PokemonTypeTag";
import { ForEach } from "src/Components/ForEach";
import { getPokemonStat } from "src/utils";

/**
 * If the currentPokemon is undefined, the modal is set to closed.
 */
export const PokeInfoModal = () => {
  const {
    currentPokemon: [currentPokemon, setCurrentPokemon],
    addPokemon,
  } = PokeContext.useContext();

  const closeModal = () => {
    setCurrentPokemon(null);
  };

  const avoidClosing: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const capturePokemon = () => {
    addPokemon(currentPokemon!);
    closeModal();
  };

  if (!currentPokemon) {
    return null;
  }

  return (
    <FloatingDiv>
      <DarkenedBackground onClick={closeModal}>
        <CenterContent>
          <PokeDetailsContainer onClick={avoidClosing}>
            <CloseModalContainer>
              <CloseModalButton onClick={closeModal}>
                <CloseModalIcon src={CloseModalIconImage} />
              </CloseModalButton>
            </CloseModalContainer>
            <PokemonSpriteHolder>
              <PokemonSprite src={currentPokemon.sprites.front_default} />
            </PokemonSpriteHolder>

            <PokemonDataContainer>
              <Title>{currentPokemon.name}</Title>
              <HorizontalContainer>
                <div>
                  <Subitlte>HP</Subitlte>
                  <Title>
                    {getPokemonStat(currentPokemon, "hp")}/
                    {getPokemonStat(currentPokemon, "hp")}
                  </Title>
                </div>
                <SideBorderedDiv>
                  <Subitlte>Altura</Subitlte>
                  <Title>{currentPokemon.height / 10} m</Title>
                </SideBorderedDiv>

                <div>
                  <Subitlte>Peso</Subitlte>
                  <Title>{currentPokemon.weight / 100} kg</Title>
                </div>
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Tipo</Title>
                <HorizontalDivider />
              </HorizontalContainer>

              <HorizontalContainer>
                <PokemonTypeTag type={currentPokemon.types[0]?.type.name} />
                <PokemonTypeTag type={currentPokemon.types[1]?.type.name} />
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
                    <AbilityText key={ability.ability.name}>
                      {ability.ability.name}
                    </AbilityText>
                  )}
                />
              </HorizontalContainer>

              <PokeballHolder />
            </PokemonDataContainer>
          </PokeDetailsContainer>

          <HorizontalContainer>
            <PokeballButton onClick={capturePokemon}>
              <img src={PokeballImage} />
            </PokeballButton>
          </HorizontalContainer>
        </CenterContent>
      </DarkenedBackground>
    </FloatingDiv>
  );
};
