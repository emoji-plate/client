import styled from "styled-components";

// animations
import MoveInAnimation from "./animations/MoveIn";

// svgs
import MainLogo from "./assets/MainLogo";
import PlateIllustration from "./assets/PlateIllustration";

const AppStyle = styled.div`
  .plate-svg-container {
    position: absolute;
    top: 10%; left: 10%;
  }

  .mainlogo-svg-container {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    animation: ${MoveInAnimation} 2s;
  }
`;

function App() {
  return (
    <AppStyle>
      <span className="plate-svg-container">
        <PlateIllustration />
      </span>
      <span className="mainlogo-svg-container">
        <MainLogo />
      </span>
    </AppStyle>
  );
}

export default App;
