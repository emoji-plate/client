import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Link to="/documentation">Documentation</Link>
      <Link to="/documentation/api">API</Link>
      <Link to="/documentation/changelog">v1.0.0</Link>
    </LinkContainerStyle>
  );
};

export default LinkContainer;
