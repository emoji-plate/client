import React, { useState } from "react";
import styled from "styled-components";

import Button from "../styles/Button";
import { Link } from "react-router-dom";

import Overlay from "../styles/Overlay";
import openUrl from "../util/openURL";

import DownloadablePngZipFile from "../icons-data/png/emoji-plate-solid-icons.zip";
import DownloadableSvgZipFile from "../icons-data/svg/emoji-plate-solid-icons.zip";
import DownloadableJpgZipFile from "../icons-data/jpg/emoji-plate-solid-icons.zip";

const DownloadStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  padding: 20px 15px;
  padding-bottom: 50px;
  z-index: 100;
  color: #3f3a15;

  #back-button {
    position: absolute;
    top: 4%;
    left: 5%;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3f3a15;
    padding: 10px;

    h1,
    p {
      margin: 4px 0;
      text-align: center;
    }

    .actions {
      button {
        margin: 20px 4px;
      }
    }

    @media screen and (max-width: 600px) {
      h1 {
        font-size: 200%;
      }
    }
  }

  button {
    margin: 20px 0;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a#download-link {
    max-width: 100%;
    min-height: 47px;
    font-size: 100%;
    display: flex;
    align-items: center;

    background: linear-gradient(180.52deg, #fffce3 0.45%, #ffffff 300.35%);
    box-shadow: 4px 8px 8px rgba(56, 56, 56, 0.07);
    border-radius: 25px;
    margin: 4px 0;
    padding: 5px 10px;
    text-decoration: none;
  }

  div {
    header {
      padding: 20px;
      padding-top: 50px;
    }

    padding-bottom: 20px;
  }
`;

const Download = () => {
  const [overlayOpen, setOverlay] = useState(false);

  const handleOverlayClose = () => {
    setOverlay(false);
  };

  return (
    <DownloadStyle>
      <Button id="back-button" secondary>
        <Link to="/">☉ Get Back Home</Link>
      </Button>
      <header>
        <h1>Download Our Icons and Assets from here!</h1>
        <p>Download our Icons as SVG, PNG or as a complete ZIP File.</p>
        <div className="actions">
          <Button onClick={() => setOverlay(true)}>Download All Icons</Button>
          <Button
            secondary
            onClick={() =>
              openUrl(
                "https://www.figma.com/community/file/1056498728431087975"
              )
            }
          >
            Visit Figma Design File ✐
          </Button>
        </div>
      </header>

      {/** Overlay to choose download type */}
      <Overlay
        expandable={true}
        visible={overlayOpen}
        onClose={handleOverlayClose}
      >
        <header>
          <h3>Choose Download Type</h3>
          <p>You can download it in these format</p>
        </header>
        <a id="download-link" href={DownloadableSvgZipFile} download>
          Download All Icons ☇ as SVG
        </a>
        <a id="download-link" href={DownloadablePngZipFile} download>
          Download All Icons ☇ as PNG
        </a>
        <a id="download-link" href={DownloadableJpgZipFile} download>
          Download All Icons ☇ as JPG
        </a>
      </Overlay>
    </DownloadStyle>
  );
};

export default Download;
