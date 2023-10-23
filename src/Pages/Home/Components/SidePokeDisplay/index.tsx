import { Pokemon } from "src/Models/Pokemon";
import { PokeSprite, PokemonContainer } from "./styles";
import { CenterContent } from "src/Components/CenterContent";

type SidePokeDisplayProps = {
  pokemon: Pokemon | undefined;
};

export const SidePokeDisplay = ({ pokemon }: SidePokeDisplayProps) => {
  if (pokemon) {
    return <PopulatedPokeDisplay pokemon={pokemon} />;
  } else {
    return <EmptyPokeDisplay />;
  }
};

export const PopulatedPokeDisplay = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <PokemonContainer>
      <PokeSprite src={pokemon.sprites.front_default} />
    </PokemonContainer>
  );
};

export const EmptyPokeDisplay = () => {
  return (
    <PokemonContainer>
      <CenterContent>?</CenterContent>
    </PokemonContainer>
  );
};
