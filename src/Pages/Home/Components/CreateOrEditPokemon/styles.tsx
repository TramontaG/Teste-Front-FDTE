import { styled } from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const Container = styled.div`
  display: flex;
  padding: 1.3rem;
  flex-direction: column;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.neutrals["500"]};
`;

export const LinedHeader = styled.span`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 0.8rem;
`;

export const Label = styled.span`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 0.8rem;
  margin-top: 20px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;
`;

export const TextInput = styled.input`
  background-color: ${Colors.neutrals["100"]};
  border: 2px solid ${Colors.neutrals["400"]};
  border-radius: 2px;
  padding: 0.5rem;
  margin-top: 10px;

  color: ${Colors.neutrals["800"]};
  font-weight: bold;

  &::placeholder {
    color: ${Colors.neutrals["500"]};
    font-weight: bold;
  }
`;
export const Dropdown = styled.select`
  background-color: ${Colors.neutrals["100"]};
  border: 2px solid ${Colors.neutrals["400"]};
  border-radius: 2px;
  padding: 0.5rem;
  margin-top: 8px;
  margin-bottom: 25px;

  color: ${Colors.neutrals["800"]};
  font-weight: bold;
`;

export const PokemonTypeOption = styled.option`
  color: ${Colors.neutrals["800"]};
  font-weight: bold;
`;

export const StatTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  margin-top: 10px;
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

export const CapitalizedSubtitle = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;
