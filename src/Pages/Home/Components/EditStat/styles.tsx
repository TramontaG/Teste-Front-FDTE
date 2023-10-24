import styled from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const Title = styled.h3`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
  position: relative;
  left: 15px;
`;

export const PropertyEditorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export const InvisibleButon = styled.button`
  background: none;
  border: none;
  position: relative;
  width: 30px;
  height: 30px;
  left: 10px;
`;

export const Icon = styled.img`
  width: 15px;
  height: auto;
`;

export const EditInput = styled.input`
  flex-grow: 1;
  padding: 5px 1rem;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid ${Colors.neutrals["500"]};
  background-color: ${Colors.neutrals["100"]};
  box-shadow: ${Colors.neutrals["500"]} 5px 20px 50px 1px;
`;

export const EditButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.neutrals["500"]};
  border-radius: 5px;
  box-shadow: ${Colors.neutrals["500"]} 5px 20px 50px 1px;
  background-color: ${Colors.neutrals["300"]};
`;

export const EditPropertyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 1rem;
`;

export const EditButtonsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
