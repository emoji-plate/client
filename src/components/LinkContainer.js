import React from "react";
import styled from "styled-components";
import Link from "../styles/Link";

const LinkContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const LinkContainer = () => {
  return (
    <LinkContainerStyle>
      <Link
        about="_blank"
        href="https://github.com/haneenmahd/emoji-plate#readme"
      >
        Documentation
      </Link>
      <Link
        about="_blank"
        href="https://github.com/haneenmahd/emoji-plate/releases/tag/v1"
      >
        v1.0.0
      </Link>
    </LinkContainerStyle>
  );
};

export default LinkContainer;
