import Colors from "src/StyleGuide/colors.json";
import PokemonTypes from "src/strings/PokemonTypes.json";
import { Tag } from "./styles";

type PokemonType = keyof (typeof Colors)["types"];

export type PokemonTypeTagProps = {
  type?: PokemonType;
};

export const PokemonTypeTag = ({ type }: PokemonTypeTagProps) => {
  console.log(type);
  if (!type) return null;
  const typeColor = Colors.types[type];
  const translatedType = PokemonTypes[type];

  return <Tag color={typeColor}>{translatedType}</Tag>;
};
