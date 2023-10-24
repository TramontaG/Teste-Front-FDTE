import { FloatingDiv } from "src/Components/FloatingDiv";
import { AshFigure, OverAshTranslation } from "./styles";
import AshFront from "src/assets/images/ashFront.png";
import SearchTooltipImage from "src/assets/images/searchTooltip.png";
import ErrorTooltipImage from "src/assets/images/tooltipError.png";
import LoadingTooltipImage from "src/assets/images/searchingTooltip.png";
import { useState } from "react";
import { PokeContext } from "../../Contexts/PokeContext";
import { PokemonApi } from "src/API";

type ToolTipVariant = "Loading" | "Search" | "Error" | "None";

const getTooltipImage = (variant: ToolTipVariant) => {
  switch (variant) {
    case "Loading":
      return LoadingTooltipImage;
    case "Error":
      return ErrorTooltipImage;
    case "Search":
      return SearchTooltipImage;
    default:
      return undefined;
  }
};

export const AshKetchum = () => {
  const [tooltipVariant, setTooltipVariant] = useState<ToolTipVariant>("None");
  const {
    currentPokemon: [, setCurrentPokemon],
  } = PokeContext.useContext();

  /**
   * Used only to handle mouse events
   * @param variant
   * @returns
   */
  const tooltipSetter = (variant: ToolTipVariant) => () => {
    // Don't change the tooltip if Ash is already searching for a pokemon
    if (tooltipVariant === "Loading") {
      return;
    }
    setTooltipVariant(variant);
  };

  const onClickAsh = async () => {
    try {
      setTooltipVariant("Loading");
      const randomPokemon = await PokemonApi.getRandomPokemon();
      setCurrentPokemon(randomPokemon);
      setTooltipVariant("None");
    } catch (e) {
      setTooltipVariant("Error");
    }
  };

  const tooltip = getTooltipImage(tooltipVariant);

  return (
    <>
      <FloatingDiv style={OverAshTranslation}>
        <img src={tooltip} />
      </FloatingDiv>
      <AshFigure
        src={AshFront}
        onMouseEnter={tooltipSetter("Search")}
        onMouseLeave={tooltipSetter("None")}
        onClick={onClickAsh}
      />
    </>
  );
};
