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
  PokeballHolder,
} from "./styles";
import { CenterContent } from "src/Components/CenterContent";
import { MouseEventHandler } from "react";

import CloseModalIconImage from "src/assets/images/close.png";
import AddSpriteImage from "src/assets/images/camera.png";

import { Pokemon } from "src/Models/Pokemon";
import { ActionButton } from "src/Components/ActionButton";

type CreatePokemonModalProps = {
  pokemon: Pokemon;
};

export const PokeInfoModal = ({ pokemon }: CreatePokemonModalProps) => {
  const avoidClosing: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  if (!open) {
    return null;
  }

  return (
    <FloatingDiv>
      <DarkenedBackground onClick={close}>
        <CenterContent>
          <PokeDetailsContainer onClick={avoidClosing}>
            <CloseModalContainer>
              <CloseModalButton onClick={close}>
                <CloseModalIcon src={CloseModalIconImage} />
              </CloseModalButton>
            </CloseModalContainer>
            <PokemonSpriteHolder>
              <PokemonSprite
                src={pokemon.sprites.front_default || AddSpriteImage}
              />
            </PokemonSpriteHolder>

            <PokemonDataContainer>
              <Title>{pokemon.name}</Title>
              <HorizontalContainer>
                <div>
                  <Subitlte>HP</Subitlte>
                  <Title>
                    {pokemon.hp}/{pokemon.hp}
                  </Title>
                </div>
                <SideBorderedDiv>
                  <Subitlte>ALTURA</Subitlte>
                  <Title>{pokemon.height} m</Title>
                </SideBorderedDiv>

                <div>
                  <Subitlte>PESO</Subitlte>
                  <Title>{pokemon.weight} kg</Title>
                </div>
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Tipo</Title>
                <HorizontalDivider />
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Habilidades</Title>
                <HorizontalDivider />
              </HorizontalContainer>

              <PokeballHolder />
            </PokemonDataContainer>
          </PokeDetailsContainer>

          <HorizontalContainer>
            <ActionButton>Criar Pokemon</ActionButton>
          </HorizontalContainer>
        </CenterContent>
      </DarkenedBackground>
    </FloatingDiv>
  );
};
