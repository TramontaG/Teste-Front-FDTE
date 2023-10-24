import { CenterContent } from "src/Components/CenterContent";
import { HomeBackgroundImage } from "./styles";
import { AshKetchum } from "./Components/AshKetchum";
import { PokeContext } from "./Contexts/PokeContext";
import { SideBar } from "./Components/Sidebar";
import { PokeInfoModal } from "./Components/PokeInfoModal";

export const Home = () => {
  return (
    <>
      <PokeContext.provider>
        <SideBar />
        <PokeInfoModal />
        <CenterContent style={HomeBackgroundImage}>
          <AshKetchum />
        </CenterContent>
      </PokeContext.provider>
    </>
  );
};
