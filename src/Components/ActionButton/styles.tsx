import styled from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const StyledActionButton = styled.button`
  background-color: ${Colors.action.default};
  border: none;
  padding: 1rem 2rem;
  border-radius: 999px;
  color: ${Colors.neutrals[200]};
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
`;
