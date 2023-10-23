import { useNavigate } from "react-router-dom";
import { CenterContent } from "src/Components/CenterContent";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <CenterContent>
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
