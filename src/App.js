import styled, { keyframes } from "styled-components";

// components
import { FONT_SIZES } from "./constants";
import Header from "./styles/Header";

// svgs
import MainLogo from "./assets/MainLogo";
import PlateIllustration from "./assets/PlateIllustration";

const MoveInAnimation = keyframes`
  from {
    transform: translate(-50%, -100%);
  }
  
  to {
    transform: translate(-50%, 0%);
  }
`;

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

      <Header fontSize={FONT_SIZES.large}>
        Hello
      </Header>
    </AppStyle>
  );
}

export default App;
