import React from "react";
import styled from "styled-components";

const DocumentationStyle = styled.div`
    display: flex;
`;

const SideNavigationBar = styled.nav`
    height: 100vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 2;
`;

const SideNavigationSelector = styled.span`
    height: 60px;
    width: 90%;
    border-radius: 20px;
    &:hover {
        background: ;
    }
`;

const Documentation = (props) => {
    return (
      <DocumentationStyle>
        <SideNavigationBar>
          <SideNavigationSelector>API</SideNavigationSelector>
        </SideNavigationBar>
        <h1>Documentation</h1>
      </DocumentationStyle>
    );
}

export default Documentation;