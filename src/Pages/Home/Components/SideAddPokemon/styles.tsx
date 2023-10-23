import styled from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const SideAddPokemonContainer = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${Colors.action.default};
  font-size: 2rem;
  color: ${Colors.neutrals["700"]};
  border: 5px solid ${Colors.action.dark};
  margin: 10px;
  font-weight: 800;
  cursor: pointer;
`;
