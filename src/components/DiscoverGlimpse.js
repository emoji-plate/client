import styled from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";
import Button from "../styles/Button";
import Overlay from "../styles/Overlay";
import { Link } from "react-router-dom";

// json import
import emojiDB from "../data/db.json";
import { useState } from "react/cjs/react.development";

const DiscoverStyle = styled.div`
  min-height: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 20px 15px;
  padding-bottom: 50px;

  header {
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    header {
      font-size 250%;
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
  margin: 2% 0;
  border-radius: 20px;
  padding: 12px 10px;
  box-shadow: 4px 8px 20px 0 #68612350;
  background: #ffffff50;
  border: 1px solid #686123;
  color: #686123;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    color: #3f3a15;
    font-size: 400%;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    height: 130px;
    width: 130px;
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
  }

  return (
    <DiscoverStyle>
      <Header
        className="main-header"
        primary={true}
        fontSize={FONT_SIZES.large}
      >
        Discover your favourite emojis here!
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
    </DiscoverStyle>
  );
}

export default DiscoverGlimpse;