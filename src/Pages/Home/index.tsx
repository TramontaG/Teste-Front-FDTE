import { CenterContent } from "src/Components/CenterContent";
import { HomeBackgroundImage } from "./styles";
import { AshKetchum } from "./Components/AshKetchum";
import { PokeContext } from "./Contexts/PokeContext";
import { SideBar } from "./Components/Sidebar";
import { WildPokemonModal } from "./Components/WildPokemonModal";
import { CapturedPokemonInfoModal } from "./Components/CapturedPokeInfoModal";

export const Home = () => {
  return (
    <>
      <PokeContext.provider>
        <SideBar />
        <WildPokemonModal />
        <CapturedPokemonInfoModal />
        <CenterContent style={HomeBackgroundImage}>
          <AshKetchum />
        </CenterContent>
      </PokeContext.provider>
    </>
  );
};
