import React from "react";
import Link from "../styles/Link";
import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

import Logo from "../assets/png/logo.png";

const FooterStyle = styled.footer`
  max-width: 100vw;
  height: 100%;
  font-size: 24px;
  margin: 0;
  padding: 20px;

  background: linear-gradient(180.52deg, #fcf6c3 0.45%, #e6db7f 300.35%);
  box-shadow: -4px -8px 8px rgba(56, 56, 56, 0.03);

  img {
    margin: 0;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;

    h5 {
      margin: 5px;
    }

    a {
      margin: 4px 0;
    }

    a:hover {
      background: none;
      color: inherit;
    }
  }

  .info {
    h5 {
      margin: 10px 5px;
    }

    p {
      font-size: 20px;
      margin: 10px 5px;
      width: 40%;
    }
  }

  @media screen and (max-width: 600px) {
    .info {
      p {
        width: 80%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <img
        height={100}
        src={Logo}
        alt="Emoji Plate Logo for Illustration purposes. It is shown right here on the footer"
      />
      <div className="links">
        <h5>Links ↖︎</h5>
        <Link href="https://github.com/haneenmahd/emoji-plate">GitHub</Link>
        <Link href="https://github.com/haneenmahd">Developer</Link>
        <Link href="https://github.com/haneenmahd/emoji-plate/issues">
          Issues
        </Link>
        <Link href="https://github.com/haneenmahd/emoji-plate/issues/new">
          Open a issue＋
        </Link>
        <Link href="https://github.com/haneenmahd/emoji-plate/pulls">
          Suggest an idea💡
        </Link>
        <Link href="https://github.com/haneenmahd/emoji-plate/blob/master/CONTRIBUTING.md">
          Contributing
        </Link>
        <LinkR to="/download">Download</LinkR>
      </div>
      <div className="info">
        <h5>Info</h5>
        <p>
          Emoji plate is a open-source project hosted on GitHub. It is a
          collection of emojis and symbols that your keyboard lacks at giving
          you.
          <br />
          <br />
          <i>Give us a star ⭐️ on GitHub</i>
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
