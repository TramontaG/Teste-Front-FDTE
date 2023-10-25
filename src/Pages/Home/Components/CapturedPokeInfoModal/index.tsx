import { PokeContext } from "../../Contexts/PokeContext";

import { ActionButton } from "src/Components/ActionButton";
import { Modal } from "../Modal";
import { OriginalPokemonInfo } from "../OriginalPokemonInfo";
import { CreateOrEditPokemon } from "../CreateOrEditPokemon";

/**
 * If the selected pokemon is undefined, the modal is set to closed.
 */
export const CapturedPokemonInfoModal = () => {
  const {
    selectedPokemon: [selectedPokemon, setselectedPokemon],
    removePokemon,
  } = PokeContext.useContext();

  const closeModal = () => {
    setselectedPokemon(null);
  };

  const releasePokemon = () => {
    removePokemon(selectedPokemon!);
    closeModal();
  };

  if (!selectedPokemon) {
    return null;
  }

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
        closeModal={closeModal}
        action={
          <ActionButton onClick={releasePokemon}>Liberar Pokemon</ActionButton>
        }
        pokemonSprite={selectedPokemon.sprites.front_default}
      >
        <CreateOrEditPokemon pokemon={selectedPokemon} />
      </Modal>
    );
  }
};
