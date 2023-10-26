import { FloatingDiv } from "src/Components/FloatingDiv";
import {
  CloseModalButton,
  CloseModalContainer,
  CloseModalIcon,
  DarkenedBackground,
  PokeDetailsContainer,
  PokemonDataContainer,
  PokemonSprite,
  PokemonSpriteHolder,
  HorizontalContainer,
  ActionContainer,
  ActionHolder,
  AddSpriteContainer,
  RoundActionButton,
  WithoutDimensions,
  Plus,
} from "./styles";
import { CenterContent } from "src/Components/CenterContent";
import { MouseEventHandler, PropsWithChildren, createRef } from "react";

import CloseModalIconImage from "src/assets/images/close.png";
import AddSpriteIcon from "src/assets/images/camera.png";
import PlusIcon from "src/assets/images/plus.png";

import { Render } from "src/Components/Render";
import { HiddenForm } from "src/Components/ImageUpload";
import { PokeContext } from "../../Contexts/PokeContext";
import { Pokemon } from "src/Models/Pokemon";

export type ModalProps = PropsWithChildren & {
  pokemonSprite: string;
  action: JSX.Element;
  active: boolean;
  closeModal: () => void;
  setSprite?: () => void;
  doubleSpacing?: boolean;
};

/**
 * If the currentPokemon is undefined, the modal is set to closed.
 */
export const Modal = ({
  pokemonSprite,
  action,
  children,
  active,
  closeModal,
  doubleSpacing = false,
}: ModalProps) => {
  const avoidClosing: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  let hiddenForm = createRef<HTMLInputElement>();

  if (!active) {
    return null;
  }

  const {
    selectedPokemon: [pokemon, setPokemon],
  } = PokeContext.useContext();

  const setImage = (b64: string) => {
    const updatedPokemon: Pokemon = {
      ...pokemon!,
      sprites: {
        ...pokemon!.sprites,
        front_default: `${b64}`,
      },
    };

    setPokemon(updatedPokemon);
  };

  const readImage = () => {
    hiddenForm.current?.click();
  };

  return (
    <FloatingDiv>
      <DarkenedBackground onClick={closeModal}>
        <CenterContent>
          <PokeDetailsContainer onClick={avoidClosing}>
            <CloseModalContainer>
              <CloseModalButton onClick={closeModal}>
                <CloseModalIcon src={CloseModalIconImage} />
              </CloseModalButton>
            </CloseModalContainer>
            <PokemonSpriteHolder>
              <Render when={!!pokemonSprite}>
                <PokemonSprite src={pokemonSprite} />
              </Render>

              <Render when={!pokemonSprite}>
                <AddSpriteContainer>
                  <HiddenForm setImage={setImage} ref={hiddenForm} />

                  <img src={AddSpriteIcon} />
                  <WithoutDimensions>
                    <RoundActionButton onClick={readImage}>
                      <Plus src={PlusIcon} />
                    </RoundActionButton>
                  </WithoutDimensions>
                </AddSpriteContainer>
              </Render>
            </PokemonSpriteHolder>

            <PokemonDataContainer>
              {children}
              <ActionHolder />
              <Render when={doubleSpacing}>
                <ActionHolder />
              </Render>
            </PokemonDataContainer>
          </PokeDetailsContainer>
          <HorizontalContainer>
            <ActionContainer>{action}</ActionContainer>
          </HorizontalContainer>
        </CenterContent>
      </DarkenedBackground>
    </FloatingDiv>
  );
};
