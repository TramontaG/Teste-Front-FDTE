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

export const Label = styled.span`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 0.8rem;
  margin-top: 20px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: ${Colors.neutrals["500"]};
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;
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
