import styled, { keyframes } from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

// svgs
import MainLogo from "../assets/MainLogo";
import ButtonContainer from "../components/ButtonContainer";
import LinkContainer from "../components/LinkContainer";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";
import { useState } from "react";
import Discover from "../components/DiscoverGlimpse";

// json import
import emojiDB from "../data/db.json";

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
  max-width: 100vw;
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
        width: calc(45%);
        transition: .3s;
    }
  }

  .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%:
      width: 100vw;
      text-align: center;
      margin-top: 30px;
      z-index: 4;

      .main-header {
          padding: 0 3%;
      }

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
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [emojis] = useState(emojiDB);

  const [isCopied, setCopied] = useState(false);

  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const handleGetMeEmojiClick = () => {
    setOverlayOpen(true);
  }

  const handleEmojiCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const openGitHubRepo = () => {
    window.open("https://github.com/haneenmahd/emoji-plate");
  }

  return (
    <AppStyle>
      <main className="main-container">
        <span className="mainlogo-svg-container">
          <MainLogo />
        </span>
        <Header
          className="main-header"
          primary={true}
          fontSize={FONT_SIZES.large}
        >
          Best emojis in the town.
        </Header>
        <Header className="secondary-header" fontSize={FONT_SIZES.midLarge}>
          Get emojis that you don’t get from anywhere else from here.
        </Header>
        <ButtonContainer
          githubLinkClick={openGitHubRepo}
          getMeEmojiHandler={handleGetMeEmojiClick}
        />
        <LinkContainer />
        <Button>Discover Emojis ⚉</Button>
        <Overlay onClose={() => setOverlayOpen(false)} visible={overlayOpen}>
          <h1
            style={{
              fontSize: "700%",
              fontWeight: "bold",
              color: "#A9A68E",
              textAlign: "center",
              margin: "0",
            }}
          >
            {randomEmoji.icon}
          </h1>
          <p>{randomEmoji.name}</p>
          <Button onClick={handleEmojiCopy}>
            {isCopied ? <b>Copied</b> : "Copy"}
          </Button>
        </Overlay>
      </main>
      <Discover />
    </AppStyle>
  );
}

export default App;