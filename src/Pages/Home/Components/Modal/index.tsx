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
} from "./styles";
import { CenterContent } from "src/Components/CenterContent";
import { MouseEventHandler, PropsWithChildren } from "react";

import CloseModalIconImage from "src/assets/images/close.png";

export type ModalProps = PropsWithChildren & {
  pokemonSprite: string;
  action: JSX.Element;
  active: boolean;
  closeModal: () => void;
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
}: ModalProps) => {
  const avoidClosing: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  if (!active) {
    return null;
  }

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
              <PokemonSprite src={pokemonSprite} />
            </PokemonSpriteHolder>

            <PokemonDataContainer>
              {children}
              <ActionHolder />
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
