import Colors from "src/StyleGuide/colors.json";
import PokemonTypes from "src/strings/PokemonTypes.json";
import { Tag } from "./styles";
import { PokemonType } from "src/Models/Pokemon";

export type PokemonTypeTagProps = {
  type?: PokemonType;
};

export const PokemonTypeTag = ({ type }: PokemonTypeTagProps) => {
  if (!type) return null;

  const typeColor = Colors.types[type];
  const translatedType = PokemonTypes[type];

  return <Tag color={typeColor}>{translatedType}</Tag>;
};
