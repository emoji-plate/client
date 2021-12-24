import styled, { keyframes } from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

import ButtonContainer from "../components/ButtonContainer";
import LinkContainer from "../components/LinkContainer";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";
import { useState } from "react";
import { Link } from "react-router-dom";
import Discover from "../components/DiscoverGlimpse";

import PlateIllustration from "../assets/PlateIllustration";

// json import
import emojiDB from "../data/db.json";

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(-25deg);
  }

  50% {
    transform: rotate(25deg);
  }

  85% {
    transform: rotate(75deg);
  }

  100% {
    transform: rotate(0);
  }
`;

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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

function Main() {
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
        {/**<LinkContainer /> */}
        <Button>
          <Link to="/discover">Discover Emojis ⚉</Link>
        </Button>
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
    </AppStyle>
  );
}

function Home() {
  return (
    <div>
      <span
        style={{
          position: "absolute",
          top: "1%",
          zIndex: "1",
        }}
      >
        <PlateIllustration />
      </span>
      <Main />
      <Discover />
    </div>
  );
}

export default Home;