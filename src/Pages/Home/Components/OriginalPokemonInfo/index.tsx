import {
  CapitalizedSubtitle,
  HorizontalContainer,
  HorizontalDivider,
  SideBorderedDiv,
  StatContainer,
  StatIcon,
  StatIconContainer,
  StatTitleContainer,
  Subitlte,
  Title,
} from "./styles";
import { PokemonTypeTag } from "../PokemonTypeTag";
import { ForEach } from "src/Components/ForEach";
import { Pokemon } from "src/Models/Pokemon";
import { EditName } from "../EditName";

import ShiledIcon from "src/assets/images/shield.png";
import SpeedIcon from "src/assets/images/speed.png";
import SwordIcon from "src/assets/images/sword.png";

type OriginalPokemonInfoProps = {
  pokemon: Pokemon;
};

export const OriginalPokemonInfo = ({ pokemon }: OriginalPokemonInfoProps) => {
  return (
    <>
      <EditName />
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
        <PokemonTypeTag type={pokemon.types[0]} />
        <PokemonTypeTag type={pokemon.types[1]} />
      </HorizontalContainer>

      <HorizontalContainer>
        <HorizontalDivider />
        <Title>Habilidades</Title>
        <HorizontalDivider />
      </HorizontalContainer>

      <HorizontalContainer>
        <ForEach
          data={pokemon.abilities}
          render={(ability) => (
            <CapitalizedSubtitle key={ability}>{ability}</CapitalizedSubtitle>
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
        <CapitalizedSubtitle>{pokemon.defense}</CapitalizedSubtitle>
      </StatContainer>

      <StatContainer>
        <StatTitleContainer>
          <StatIconContainer>
            <StatIcon src={SwordIcon} />
          </StatIconContainer>
          <CapitalizedSubtitle>Ataque</CapitalizedSubtitle>
        </StatTitleContainer>
        <CapitalizedSubtitle>{pokemon.attack}</CapitalizedSubtitle>
      </StatContainer>

      <StatContainer>
        <StatTitleContainer>
          <StatIconContainer>
            <StatIcon src={ShiledIcon} />
          </StatIconContainer>
          <CapitalizedSubtitle>Defesa especial</CapitalizedSubtitle>
        </StatTitleContainer>
        <CapitalizedSubtitle>{pokemon.special_deffense}</CapitalizedSubtitle>
      </StatContainer>

      <StatContainer>
        <StatTitleContainer>
          <StatIconContainer>
            <StatIcon src={SwordIcon} />
          </StatIconContainer>
          <CapitalizedSubtitle>Ataque especial</CapitalizedSubtitle>
        </StatTitleContainer>
        <CapitalizedSubtitle>{pokemon.special_attack}</CapitalizedSubtitle>
      </StatContainer>

      <StatContainer>
        <StatTitleContainer>
          <StatIconContainer>
            <StatIcon src={SpeedIcon} />
          </StatIconContainer>
          <CapitalizedSubtitle>Velocidade</CapitalizedSubtitle>
        </StatTitleContainer>
        <CapitalizedSubtitle>{pokemon.speed}</CapitalizedSubtitle>
      </StatContainer>
    </>
  );
};
