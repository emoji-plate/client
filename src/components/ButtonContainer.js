import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";

const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  margin: 18px 0;

  max-width: 100%;
  min-height: 80px;

  background: #dfdbb9;
  border-radius: 25px;

  button {
    margin: 0 18px;
  }
`;

const ButtonContainer = (props) => {
    return (
      <ButtonContainerStyle>
        <Button onClick={props.getMeEmojiHandler}>Get me an emoji 😀</Button>
        <Button onClick={props.githubLinkClick} secondary>GitHub</Button>
      </ButtonContainerStyle>
    );
}

export default ButtonContainer;