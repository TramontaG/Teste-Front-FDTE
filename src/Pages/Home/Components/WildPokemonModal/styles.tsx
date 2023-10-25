import { styled } from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const Title = styled.h3`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;

export const Subitlte = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  margin: 0rem;
  padding: 0rem;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.neutrals["600"]};
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: ${Colors.neutrals["500"]};
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

export const SideBorderedDiv = styled.div`
  width: 33%;
  border-left: 1px solid ${Colors.neutrals["500"]};
  border-right: 1px solid ${Colors.neutrals["500"]};
`;

export const DashedTextContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.neutrals["600"]};
`;

export const AbilityText = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;

export const PokeballButton = styled.button`
  height: 100px;
  background: none;
  border: none;
`;
