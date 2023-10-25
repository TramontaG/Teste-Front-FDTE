import {
  Title,
  Subitlte,
  HorizontalContainer,
  SideBorderedDiv,
  HorizontalDivider,
} from "./styles";

import { Pokemon } from "src/Models/Pokemon";

type CreatePokemonModalProps = {
  pokemon: Pokemon;
};

export const CreateOrEditPokemon = ({ pokemon }: CreatePokemonModalProps) => {
  return (
    <>
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
    </>
  );
};
