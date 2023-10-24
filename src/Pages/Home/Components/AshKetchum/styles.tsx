import { CSSProperties } from "react";
import styled from "styled-components";

export const AshFigure = styled.img`
  height: 100px;
  width: auto;
  cursor: pointer;
`;

export const OverAshTranslation: CSSProperties = {
  transform: "translate(0, -100px)",
};
