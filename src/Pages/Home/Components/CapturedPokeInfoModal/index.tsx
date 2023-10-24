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
  CapitalizedSubtitle,
  ReleasePokemonButonContainer,
  PokeballHolder,
  StatContainer,
  StatTitleContainer,
  StatIcon,
  StatIconContainer,
} from "./styles";
import { CenterContent } from "src/Components/CenterContent";
import { MouseEventHandler } from "react";

import CloseModalIconImage from "src/assets/images/close.png";
import ShiledIcon from "src/assets/images/shield.png";
import SpeedIcon from "src/assets/images/speed.png";
import SwordIcon from "src/assets/images/sword.png";

import { PokemonTypeTag } from "../PokemonTypeTag";
import { ForEach } from "src/Components/ForEach";
import { ActionButton } from "src/Components/ActionButton";
import { getPokemonStat } from "src/utils";
import { EditProperty } from "../EditStat";

/**
 * If the selected pokemon is undefined, the modal is set to closed.
 */
export const CapturedPokemonInfoModal = () => {
  const {
    selectedPokemon: [selectedPokemon, setselectedPokemon],
    removePokemon,
  } = PokeContext.useContext();

  const closeModal = () => {
    setselectedPokemon(null);
  };

  const avoidClosing: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const releasePokemon = () => {
    removePokemon(selectedPokemon!);
    closeModal();
  };

  if (!selectedPokemon) {
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
              <PokemonSprite src={selectedPokemon.sprites.front_default} />
            </PokemonSpriteHolder>

            <PokemonDataContainer>
              <EditProperty property="name" />
              <HorizontalContainer>
                <div>
                  <Subitlte>HP</Subitlte>
                  <Title>
                    {getPokemonStat(selectedPokemon, "hp")}/
                    {getPokemonStat(selectedPokemon, "hp")}
                  </Title>
                </div>
                <SideBorderedDiv>
                  <Subitlte>Altura</Subitlte>
                  <Title>{selectedPokemon.height / 10} m</Title>
                </SideBorderedDiv>

                <div>
                  <Subitlte>Peso</Subitlte>
                  <Title>{selectedPokemon.weight / 100} kg</Title>
                </div>
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Tipo</Title>

                <HorizontalDivider />
              </HorizontalContainer>

              <HorizontalContainer>
                <PokemonTypeTag type={selectedPokemon.types[0]?.type.name} />
                <PokemonTypeTag type={selectedPokemon.types[1]?.type.name} />
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Habilidades</Title>
                <HorizontalDivider />
              </HorizontalContainer>

              <HorizontalContainer>
                <ForEach
                  data={selectedPokemon.abilities}
                  render={(ability) => (
                    <CapitalizedSubtitle key={ability.ability.name}>
                      {ability.ability.name}
                    </CapitalizedSubtitle>
                  )}
                />
              </HorizontalContainer>

              <HorizontalContainer>
                <HorizontalDivider />
                <Title>Estatísticas</Title>
                <HorizontalDivider />
              </HorizontalContainer>

              <StatContainer>
                <StatTitleContainer>
                  <StatIconContainer>
                    <StatIcon src={ShiledIcon} />
                  </StatIconContainer>
                  <CapitalizedSubtitle>Defesa</CapitalizedSubtitle>
                </StatTitleContainer>
                <CapitalizedSubtitle>
                  {getPokemonStat(selectedPokemon, "defense")}
                </CapitalizedSubtitle>
              </StatContainer>

              <StatContainer>
                <StatTitleContainer>
                  <StatIconContainer>
                    <StatIcon src={SwordIcon} />
                  </StatIconContainer>
                  <CapitalizedSubtitle>Ataque</CapitalizedSubtitle>
                </StatTitleContainer>
                <CapitalizedSubtitle>
                  {getPokemonStat(selectedPokemon, "attack")}
                </CapitalizedSubtitle>
              </StatContainer>

              <StatContainer>
                <StatTitleContainer>
                  <StatIconContainer>
                    <StatIcon src={ShiledIcon} />
                  </StatIconContainer>
                  <CapitalizedSubtitle>Defesa especial</CapitalizedSubtitle>
                </StatTitleContainer>
                <CapitalizedSubtitle>
                  {getPokemonStat(selectedPokemon, "special-defense")}
                </CapitalizedSubtitle>
              </StatContainer>

              <StatContainer>
                <StatTitleContainer>
                  <StatIconContainer>
                    <StatIcon src={SwordIcon} />
                  </StatIconContainer>
                  <CapitalizedSubtitle>Ataque especial</CapitalizedSubtitle>
                </StatTitleContainer>
                <CapitalizedSubtitle>
                  {getPokemonStat(selectedPokemon, "special-attack")}
                </CapitalizedSubtitle>
              </StatContainer>

              <StatContainer>
                <StatTitleContainer>
                  <StatIconContainer>
                    <StatIcon src={SpeedIcon} />
                  </StatIconContainer>
                  <CapitalizedSubtitle>Velocidade</CapitalizedSubtitle>
                </StatTitleContainer>
                <CapitalizedSubtitle>
                  {getPokemonStat(selectedPokemon, "speed")}
                </CapitalizedSubtitle>
              </StatContainer>

              <PokeballHolder />
            </PokemonDataContainer>
          </PokeDetailsContainer>

          <HorizontalContainer>
            <ReleasePokemonButonContainer>
              <ActionButton onClick={releasePokemon}>
                Liberar Pokemon
              </ActionButton>
            </ReleasePokemonButonContainer>
          </HorizontalContainer>
        </CenterContent>
      </DarkenedBackground>
    </FloatingDiv>
  );
};
