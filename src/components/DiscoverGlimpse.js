import styled from "styled-components";

// components
import { FONT_SIZES } from "../constants";
import Header from "../styles/Header";

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
  margin-top: 10%;

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

function DiscoverGlimpse() {
  const [emojis] = useState(emojiDB.slice(0, 14));

  return (
    <DiscoverStyle>
      <Header
        className="main-header"
        primary={true}
        fontSize={FONT_SIZES.large}
      >
        Discover your favourite emojis here😀!
      </Header>
      <EmojisGrid>
        {emojis.map((emoji, index) => (
          <EmojiCard key={index}>
            <h1>{emoji.icon}</h1>
            <h4>{emoji.name}</h4>
          </EmojiCard>
        ))}
      </EmojisGrid>
    </DiscoverStyle>
  );
}

export default DiscoverGlimpse;