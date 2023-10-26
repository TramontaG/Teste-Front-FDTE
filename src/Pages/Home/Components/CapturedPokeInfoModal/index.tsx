import { PokeContext } from "../../Contexts/PokeContext";

import { ActionButton } from "src/Components/ActionButton";
import { Modal } from "../Modal";
import { OriginalPokemonInfo } from "../OriginalPokemonInfo";
import { CreateOrEditPokemon } from "../CreateOrEditPokemon";
import { Render } from "src/Components/Render";
import { TwoButtonsContainer } from "./styles";
import { pokemonIsComplete } from "src/utils";

/**
 * If the selected pokemon is undefined, the modal is set to closed.
 */
export const CapturedPokemonInfoModal = () => {
  const {
    selectedPokemon: [selectedPokemon, setselectedPokemon],
    removePokemon,
    addPokemon,
    pokeList,
    editPokemon,
  } = PokeContext.useContext();

  const closeModal = () => {
    setselectedPokemon(null);
  };

  const releasePokemon = () => {
    removePokemon(selectedPokemon!);
    closeModal();
  };

  const savePokemon: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (pokemonIsComplete(selectedPokemon!)) {
      addPokemon(selectedPokemon!);
      closeModal();
    } else {
      e.stopPropagation();
    }
  };

  const updatePokemon: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (pokemonIsComplete(selectedPokemon!)) {
      editPokemon(selectedPokemon!.id, selectedPokemon!);
      closeModal();
    } else {
      e.stopPropagation();
    }
  };

  if (!selectedPokemon) {
    return null;
  }

  const isEditing = pokeList.map((p) => p.id).includes(selectedPokemon.id);
  const buttonAction = isEditing ? updatePokemon : savePokemon;

  if (selectedPokemon.id < 1000) {
    return (
      <Modal
        active={!!selectedPokemon}
        closeModal={closeModal}
        action={
          <ActionButton onClick={releasePokemon}>Liberar Pokemon</ActionButton>
        }
        pokemonSprite={selectedPokemon.sprites.front_default}
      >
        <OriginalPokemonInfo pokemon={selectedPokemon} />
      </Modal>
    );
  } else {
    return (
      <Modal
        active={!!selectedPokemon}
        doubleSpacing={isEditing}
        closeModal={closeModal}
        action={
          <TwoButtonsContainer isEditing={isEditing}>
            <ActionButton onClick={buttonAction}>Salvar Pokemon</ActionButton>
            <Render when={isEditing}>
              <ActionButton onClick={releasePokemon}>
                Liberar Pokemon
              </ActionButton>
            </Render>
          </TwoButtonsContainer>
        }
        pokemonSprite={selectedPokemon.sprites.front_default}
      >
        <CreateOrEditPokemon />
      </Modal>
    );
  }
};
