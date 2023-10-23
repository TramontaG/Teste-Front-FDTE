import styled, { CSSProperties } from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const BackgroundStyle: CSSProperties = {
  background: `linear-gradient(0.25turn, ${Colors.primary.default}, ${Colors.primary.transparent})`,
};

export const PokeLogo = styled.img`
  max-width: 100%;
`;
