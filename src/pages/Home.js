import styled from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

import ButtonContainer from "../components/ButtonContainer";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";
import { useState } from "react";
import { Link } from "react-router-dom";
import Discover from "../components/DiscoverGlimpse";
import DesignAssets from "../components/DesignAssets";
import Developer from "../components/Developer";
import LinkContainer from "../components/LinkContainer";
import Card from "../styles/Card";

import PlateIllustration from "../assets/PlateIllustration";

// json import
import emojiDB from "../data/db.json";

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .main-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      height: 100%:
      width: 100vw;
      text-align: center;
      margin-top: 30px;
      padding: 100px;
      z-index: 4;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }

      .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

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
        <div className="intro">
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
          <Button>
            <Link to="/discover">Discover Emojis ⚉</Link>
          </Button>
        </div>
        <Card>
          <h1>New card</h1>
        </Card>
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
      <DesignAssets />
      <Developer />
    </div>
  );
}

export default Home;