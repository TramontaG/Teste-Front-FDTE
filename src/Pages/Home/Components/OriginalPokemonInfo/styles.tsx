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

export const CapitalizedSubtitle = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;

export const StatContainer = styled.div`
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const StatTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

export const StatIcon = styled.img`
  height: 100%;
`;

export const StatIconContainer = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
