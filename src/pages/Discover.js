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

const DiscoverStyle = styled.div`
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
    padding: 20px;
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
    transition: .3s;

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
}

function Discover() {
  const [emojis] = useState(emojiDB);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState("");
  const [isCopied, setCopied] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [searchedEmoji, setEmojis] = useState([]);

  const handleEmojiCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const searchHandler = (e) => {
    let output = [];
    const value = String(e.target.value);

    if (value !== "") {
      setSearching(true);
    } else {
      setSearching(false);
    }
    
    emojis.forEach(emoji => {
      let pattern = new RegExp(value, "gi");

      if (pattern.test(emoji.name)) {
        output.push(emoji);
      }
    });

    setEmojis(output);
  }

  const cardClickHandler = (emoji) => {
    setOverlayOpen(true);
    setActiveEmoji(emoji);
  }

  return (
    <DiscoverStyle>
      <Button secondary>
        <Link to="/">☉ Get Back Home</Link>
      </Button>
      <Header
        className="main-header"
        primary={true}
        fontSize={FONT_SIZES.large}
      >
        Discover your favourite emojis here!
      </Header>
      <input
        placeholder="Search for emoji"
        className="search-input"
        type="text"
        onChange={(e) => searchHandler(e)}
      />
      <EmojisGrid>
        {isSearching
          ? searchedEmoji.map((emoji, index) => (
              <EmojiCard onClick={() => cardClickHandler(emoji)} key={index}>
                <h1>{emoji.icon}</h1>
                <h4>{emoji.name}</h4>
              </EmojiCard>
            ))
          : emojis.map((emoji, index) => (
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
    </DiscoverStyle>
  );
}

export default Discover;
