import { FormEventHandler, useEffect, useState } from "react";
import {
  Title,
  PropertyEditorContainer,
  InvisibleButon,
  Icon,
  EditButton,
  EditPropertyContainer,
  EditInput,
  EditButtonsContainer,
} from "./styles";
import { PokeContext } from "../../Contexts/PokeContext";
import EditIcon from "src/assets/images/editIcon.png";
import CheckIcon from "src/assets/images/checkIcon.png";
import CloseIcon from "src/assets/images/close.png";

import { Pokemon } from "src/Models/Pokemon";

type EditStatProps = {
  property: keyof Pokemon;
};

export const EditProperty = ({ property }: EditStatProps) => {
  const {
    selectedPokemon: [selectedPokemon],
  } = PokeContext.useContext();
  const [editing, setEditing] = useState<boolean>(false);

  const startEditing = () => {
    setEditing(true);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  if (editing) {
    return (
      <ActiveEditProperty
        propertyToEdit={property as keyof Pokemon}
        cancelEdit={cancelEdit}
      />
    );
  } else {
    return (
      <DisplayProperty
        property={selectedPokemon![property] as string}
        startEditing={startEditing}
      />
    );
  }
};

type DisplayPropertyProps = {
  property: string;
  startEditing: () => any;
};
export const DisplayProperty = ({
  property,
  startEditing,
}: DisplayPropertyProps) => (
  <>
    <PropertyEditorContainer>
      <Title>
        {property as string}
        <InvisibleButon onClick={startEditing}>
          <Icon src={EditIcon} />
        </InvisibleButon>
      </Title>
    </PropertyEditorContainer>
  </>
);

type ActiveEditPropertyProps = {
  propertyToEdit: keyof Pokemon;
  cancelEdit: () => void;
};
export const ActiveEditProperty = ({
  propertyToEdit,
  cancelEdit,
}: ActiveEditPropertyProps) => {
  const {
    selectedPokemon: [selectedPokemon, setSelectedPokemon],
    pokeList,
    editPokemon,
  } = PokeContext.useContext();

  const [newPropValue, setNewPropValue] = useState("");

  // Necessary to create the input element with the old name of the pokemon;
  let editPropInput: HTMLInputElement | null = null;
  useEffect(() => {
    editPropInput!.value = selectedPokemon![propertyToEdit] as string;
  }, []);

  const updatePropValue: FormEventHandler<HTMLInputElement> = (e) => {
    setNewPropValue(editPropInput!.value);
  };

  const editProp = () => {
    const newPokemon: Pokemon = {
      ...selectedPokemon!,
      [propertyToEdit]: newPropValue,
    };

    editPokemon(selectedPokemon!.id, newPokemon);

    //Selects the updated pokemon to refresh their stats
    setSelectedPokemon(newPokemon);

    cancelEdit();
  };

  return (
    <EditPropertyContainer>
      <EditInput
        ref={(ref) => (editPropInput = ref)}
        onInput={updatePropValue}
      />
      <EditButtonsContainer>
        <EditButton onClick={editProp}>
          <Icon src={CheckIcon} />
        </EditButton>
        <EditButton onClick={cancelEdit}>
          <Icon src={CloseIcon} />
        </EditButton>
      </EditButtonsContainer>
    </EditPropertyContainer>
  );
};
