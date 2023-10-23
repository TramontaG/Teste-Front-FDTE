import { useNavigate } from "react-router-dom";
import { CenterContent } from "src/Components/CenterContent";
import { BackgroundStyle, PokeLogo } from "./styles";

import { PokemonLogo } from "src/assets/images";
import { ActionButton } from "src/Components/ActionButton";

export const LandingPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <CenterContent style={BackgroundStyle}>
      <PokeLogo src={PokemonLogo} />
      <ActionButton onClick={goToHome}>Start!</ActionButton>
    </CenterContent>
  );
};
