import styled from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

// json import
import emojiDB from "../data/db.json";
import { useState } from "react";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";
import { Link } from "react-router-dom";
import ColorfulText from "../styles/ColorfulText";

const DiscoverGlimpseStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 4%;
  padding: 20px 15px;
  padding-bottom: 50px;
  z-index: 100;

  header {
    .primary-header {
      margin: 2px 0;
      @media screen and (max-width: 600px) {
        font-size: 250%;
      }
    }

    padding: 10px 20px;

    header {
      margin: 5px 0;
    }
  }

  .search-input {
    height: 40px;
    width: 80vw;
    border-radius: 8px;
    border: none;
    outline: none;
    background: #69612338;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;

    ::placeholder {
      color: #3f3a15;
      font-weight: normal;
    }

    :focus {
      box-shadow: 0 0 0 4px #686123;
    }
  }
`;

const EmojisGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`;

const EmojiCard = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  padding: 12px 10px;
  margin: 2%;
  box-shadow: 4px 8px 20px 0 #68612350;
  background: #ffffff50;
  border: 1px solid #686123;
  color: #686123;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  h1 {
    color: #3f3a15;
    font-size: 400%;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    height: 130px;
    width: 130px;
    margin: 2% 0;
  }
`;

const OverlayDisplayer = (props) => {
  return (
    <Overlay onClose={props.onClose} visible={props.visible}>
      <h1
        style={{
          fontSize: "700%",
          fontWeight: "bold",
          color: "#A9A68E",
          textAlign: "center",
          margin: "0",
        }}
      >
        {props.emoji.icon}
      </h1>
      <p>{props.emoji.name}</p>
      <Button onClick={props.handleEmojiCopy}>
        {props.isCopied ? <b>Copied</b> : "Copy"}
      </Button>
    </Overlay>
  );
};

function DiscoverGlimpse() {
  const [emojis] = useState(emojiDB.slice(0, 10));
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState("");
  const [isCopied, setCopied] = useState(false);

  const handleEmojiCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const cardClickHandler = (emoji) => {
    setOverlayOpen(true);
    setActiveEmoji(emoji);
  };

  return (
    <DiscoverGlimpseStyle>
      <Header>
        <Header
          className="primary-header"
          primary={true}
          fontSize={FONT_SIZES.large}
        >
          Discover your favourite emojis here!
        </Header>
        <Header fontSize={FONT_SIZES.midSmall}>
          Find emojis from over {emojiDB.length} emojis.
          <br />
          From solid colors to gradients.
          <br />
          Get them as SVG, PNG, OR JPG.
        </Header>
      </Header>
      <EmojisGrid>
        {emojis.map((emoji, index) => (
          <EmojiCard onClick={() => cardClickHandler(emoji)} key={index}>
            <h1>{emoji.icon}</h1>
            <h4>{emoji.name}</h4>
          </EmojiCard>
        ))}
      </EmojisGrid>
      <OverlayDisplayer
        visible={overlayOpen}
        isCopied={isCopied}
        emoji={activeEmoji}
        handleEmojiCopy={handleEmojiCopy}
        onClose={() => setOverlayOpen(false)}
      />
      <Button secondary>
        <Link to="/discover">Find More ►</Link>
      </Button>
    </DiscoverGlimpseStyle>
  );
}

export default DiscoverGlimpse;