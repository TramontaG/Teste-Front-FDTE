import { useNavigate } from "react-router-dom";
import { CenterContent } from "src/Components/CenterContent";
import { BackgroundStyle } from "./styles";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <CenterContent style={BackgroundStyle}>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Start!
      </button>
    </CenterContent>
  );
};
