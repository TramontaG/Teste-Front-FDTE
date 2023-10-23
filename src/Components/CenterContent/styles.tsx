import { styled } from "styled-components";

export const CenterDiv = styled.div<{
  vertical?: boolean;
  horizontal?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: ${({ vertical }) => (vertical ? "center" : "flex-start")};
  align-items: ${({ horizontal }) => (horizontal ? "center" : "flex-start")};
`;
