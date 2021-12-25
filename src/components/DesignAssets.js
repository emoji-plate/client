import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "../styles/Button";
import openUrl from "../util/openURL";

import EmojiPlateThumbnail from "../assets/png/emoji-plate-thumbnail.png";
import { Link } from "react-router-dom";

const RotationEffect = keyframes`
    0% {
        transform: rotate3d(8, 20, 2, 45deg);
    }

    20% {
        transform: rotate3d(5, 20, 2, 25deg);
    }

    50% {
        transform: rotate3d(3, 20, 2, 45deg);
    }

    80% {
        transform: rotate3d(5, 20, 2, 25deg);
    }

    100% {
        transform: rotate3d(8, 20, 2, 45deg);
    }
`;

const DesignAssetsStyle = styled.div`
  height: 80vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 18, 0.96);
  padding: 4px;
  color: #fffce3;
  overflow: hidden;

  h1,
  p {
    margin: 4px 0;
  }

  div {
    padding: 10px;

    button {
      margin: 4px 10px;
      font-weight: bold;
      min-height: 47px;

      a {
          margin: 0;
          padding: 0;
      }
    }

    .btn-figma-link {
        font-weight: 600;
        font-size: 120%;
    }
  }

  img {
    height: 40%;
    transform: rotate3d(8, 20, 2, 45deg);
    margin-top: 50px;
    -webkit-box-reflect: below 0px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
      animation: ${RotationEffect} ease-in-out 3s;
      animation-delay: 2s;

    @media screen and (max-width: 600px) {
        height: 30%;
    }
  }
`;

const DesignAssets = () => {
    return (
      <DesignAssetsStyle id="download">
        <h1>Download our Assets</h1>
        <p>Download icons from Figma or as PNG, SVG, JPG.</p>
        <div>
          <Button>
            <Link to="/download">Download 𐑼</Link>
          </Button>
          <Button
            className="btn-figma-link"
            secondary
            onClick={() =>
              openUrl(
                "https://www.figma.com/community/file/1056498728431087975"
              )
            }
          >
            View File on Figma ✐
          </Button>
        </div>
        <img
          lazy="true"
          src={EmojiPlateThumbnail}
          alt="Emoji Plate Icons Figma File on Figma Community Thumbnail"
        />
      </DesignAssetsStyle>
    );
}

export default DesignAssets;