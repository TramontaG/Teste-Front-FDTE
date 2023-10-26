import { styled } from "styled-components";

export const TwoButtonsContainer = styled.div<{ isEditing: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  top: ${(props) => (props.isEditing ? "-30px" : "0")};
`;
