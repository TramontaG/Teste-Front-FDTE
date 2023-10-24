import { styled } from "styled-components";
import Colors from "src/StyleGuide/colors.json";

export const DarkenedBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.modal_background};
`;

export const PokeDetailsContainer = styled.div`
  width: 350px;
  max-width: 60%;
  height: 850px;
  max-height: 70%;
  background-color: ${Colors.neutrals["300"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0.25turn,
    ${Colors.primary.default},
    ${Colors.primary.end_gradient}
  );
  border-radius: 10px;
  overflow: scroll;
`;

export const CloseModalContainer = styled.div`
  width: calc(100% - 1rem);
  height: 30px;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  position: relative;
  justify-self: flex-start;
`;

export const CloseModalIcon = styled.img`
  height: 60%;
  width: auto;
`;

export const CloseModalButton = styled.button`
  border: 2px solid ${Colors.neutrals["600"]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonSpriteHolder = styled.div`
  min-width: 250px;
  min-height: 250px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 5px ${Colors.primary.default};
  box-sizing: border-box;
  border-radius: 100%;
  z-index: 1;
  background-color: ${Colors.neutrals["100"]};
`;

export const PokemonSprite = styled.img`
  width: 75%;
  image-rendering: pixelated;
`;

export const PokemonDataContainer = styled.div`
  background-color: ${Colors.neutrals["100"]};
  width: 100%;
  /* I hate those magic numbers */
  /* negative margin ???? Weird and ugly hack*/
  margin-top: -8.5rem;
  padding-top: 9rem;
  flex-grow: 1;
  border-radius: 25px 25px 10px 10px;
`;

export const Title = styled.h3`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;

export const Subitlte = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  margin: 0rem;
  padding: 0rem;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.neutrals["600"]};
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: ${Colors.neutrals["500"]};
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

export const SideBorderedDiv = styled.div`
  width: 33%;
  border-left: 1px solid ${Colors.neutrals["500"]};
  border-right: 1px solid ${Colors.neutrals["500"]};
`;

export const DashedTextContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.neutrals["600"]};
`;

export const CapitalizedSubtitle = styled.h5`
  color: ${Colors.neutrals["700"]};
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  margin: 0.25rem;
  padding: 0.25rem;
`;

export const ReleasePokemonButonContainer = styled.div`
  position: absolute;
  background: none;
  border: none;
  transform: translate(0px, -75px);
`;

export const PokeballHolder = styled.div`
  height: 100px;
`;

export const StatContainer = styled.div`
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const StatTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

export const StatIcon = styled.img`
  height: 100%;
  width: auto;
`;
