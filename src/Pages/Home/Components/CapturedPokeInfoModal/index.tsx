import { PokeContext } from "../../Contexts/PokeContext";

import { ActionButton } from "src/Components/ActionButton";
import { Modal } from "../Modal";
import { OriginalPokemonInfo } from "../OriginalPokemonInfo";
import { CreateOrEditPokemon } from "../CreateOrEditPokemon";
import { Render } from "src/Components/Render";
import { TwoButtonsContainer } from "./styles";

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

  const savePokemon = () => {
    addPokemon(selectedPokemon!);
    closeModal();
  };

  const updatePokemon = () => {
    editPokemon(selectedPokemon!.id, selectedPokemon!);
    closeModal();
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
        doubleSpacing
        closeModal={closeModal}
        action={
          <TwoButtonsContainer>
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
