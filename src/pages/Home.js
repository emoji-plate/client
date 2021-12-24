import styled, { keyframes } from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

// svgs
import MainLogo from "../assets/MainLogo";
import PlateIllustration from "../assets/PlateIllustration";
import ButtonContainer from "../components/ButtonContainer";
import LinkContainer from "../components/LinkContainer";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";

const MoveInAnimation = keyframes`
  from {
    transform: translate(0%, -100%);
  }
  
  to {
    transform: translate(0%, 0%);
  }
`;

const AppStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .plate-svg-container {
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 1;
  }

  .mainlogo-svg-container {
    position: absolute;
    top: 0%;
    left: 50%;
    animation: ${MoveInAnimation} 1s;
    z-index: 5;

    svg {
        height: calc(100% - 200px);
        width: calc(60%);
        transition: .3s;
    }
  }

  .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      min-height: 100vh:
      max-width: 100vw;
      text-align: center;
      margin-top: 30px;
      z-index: 4;

      .secondary-header {
          font-size: 160%;
          padding: 0 3%;
      }
      
      button {
          margin-top: 20px;
      }
  }
`;

function App() {
  return (
    <AppStyle>
      <span className="plate-svg-container">
        <PlateIllustration />
      </span>
      <main className="main-container">
        <span className="mainlogo-svg-container">
          <MainLogo />
        </span>
        <Header
          className="main-header"
          primary={true}
          fontSize={FONT_SIZES.large}
        >
          Best emojis in the town😀.
        </Header>
        <Header className="secondary-header" fontSize={FONT_SIZES.midLarge}>
          Get emojis that you don’t get from anywhere else from here.
        </Header>
        <ButtonContainer />
        <LinkContainer />
        <Button>Discover Emojis ⚉</Button>
        <Overlay>
          <h1>Hello World</h1>
        </Overlay>
      </main>
    </AppStyle>
  );
}

export default App;