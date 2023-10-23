import { CenterContent } from "src/Components/CenterContent";
import { HomeBackgroundImage } from "./styles";
import { AshKetchum } from "./Components/AshKetchum";
import { PokeContext } from "./Contexts/PokeContext";
import { SideBar } from "./Components/Sidebar";

export const Home = () => {
  return (
    <>
      <PokeContext.provider>
        <SideBar />
        <CenterContent style={HomeBackgroundImage}>
          <AshKetchum />
        </CenterContent>
      </PokeContext.provider>
    </>
  );
};
