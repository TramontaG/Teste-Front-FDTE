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

export const EditName = () => {
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
    return <ActiveEditName cancelEdit={cancelEdit} />;
  } else {
    return (
      <InactiveEditName
        name={selectedPokemon!["name"]}
        startEditing={startEditing}
      />
    );
  }
};

type DisplayPropertyProps = {
  name: string;
  startEditing: () => any;
};
export const InactiveEditName = ({
  name,
  startEditing,
}: DisplayPropertyProps) => (
  <>
    <PropertyEditorContainer>
      <Title>
        {name}
        <InvisibleButon onClick={startEditing}>
          <Icon src={EditIcon} />
        </InvisibleButon>
      </Title>
    </PropertyEditorContainer>
  </>
);

type ActiveEditPropertyProps = {
  cancelEdit: () => void;
};
export const ActiveEditName = ({ cancelEdit }: ActiveEditPropertyProps) => {
  const {
    selectedPokemon: [selectedPokemon, setSelectedPokemon],
    editPokemon,
  } = PokeContext.useContext();

  const [newName, setNewName] = useState(selectedPokemon!["name"]);

  // Necessary to create the input element with the old name of the pokemon;
  let editPropInput: HTMLInputElement | null = null;
  useEffect(() => {
    editPropInput!.value = newName;
  }, []);

  const updatePropValue: FormEventHandler<HTMLInputElement> = () => {
    setNewName(editPropInput!.value);
  };

  const editProp = () => {
    const newPokemon: Pokemon = {
      ...selectedPokemon!,
      name: newName,
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
