import styled from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const Tag = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: ${Colors.neutrals["100"]};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  width: 25%;
  border-radius: 9999px;
  font-size: 0.75rem;
  text-align: center;
`;
