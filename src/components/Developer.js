import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "../styles/Button";
import openUrl from "../util/openURL";

import Link from "../styles/Link";

const DeveloperStyle = styled.div`
  position: relative;
  height: 80vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(97, 90, 33, 0.18);
  padding: 4px;
  color: #fffce3;
  overflow: hidden;

  header {
    padding: 10px;
  }

  h1 {
    color: rgba(75, 71, 37, 1);

    @media screen and (max-width: 600px) {
      font-size: 200%;
    }
  }

  p {
    color: rgba(112, 109, 82, 1);
    @media screen and (max-width: 600px) {
      font-size: 120%;
    }
  }

  h1,
  p {
    margin: 4px 0;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    button {
      min-height: 47px;
      margin: 8px;
      font-weight: bold;

      a {
        margin: 0;
        padding: 0;
      }

      a:hover {
        background: none;
        color: inherit;
      }
    }

    .btn-figma-link {
      font-weight: 600;
      font-size: 120%;
    }
  }
`;

const GrowAndShrink = keyframes`
  from {
      height: ${Math.random() * 100}px;
  }
`;

const Abstract = styled.span`
  position: absolute;
  bottom: 0;
  left: ${p => p.left}%;
  height: ${p => p.height}px;
  width: 10px;
  border-radius: 3px 3px 0 0;
  background: rgba(45, 42, 18, ${p => p.rgbOpacity});
  animation: ${GrowAndShrink} 5s ease-in-out;
`;

const Developer = () => {
  return (
    <DeveloperStyle>
      <header>
        <h1>Join us for building our emojis 😀</h1>
        <p>Our project and source code are hosted open-source on GitHub</p>
      </header>
      <div>
        <Button>
          <Link
            about="_blank"
            href="https://github.com/haneenmahd/emoji-plate/blob/master/CONTRIBUTING.md"
          >
            Read Contributing Guidlines ⦿
          </Link>
        </Button>
        <Button
          className="btn-mail-link"
          secondary
          onClick={() => openUrl("https://github.com/haneenmahd/emoji-plate")}
        >
          View Project on GitHub 🧑🏻‍💻
        </Button>
      </div>

      {/** Abstract Elements */}
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
      <Abstract
        height={Math.random() * 100}
        left={Math.random() * 99}
        rgbOpacity={Math.random() * 1}
      />
    </DeveloperStyle>
  );
};

export default Developer;
