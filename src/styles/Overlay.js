import React from "react";
import styled from "styled-components";

// animation
import FadeIn from "../animations/FadeIn";

const OverlayStyle = styled.div`
  display: ${p =>p.visible ? "block" : "none"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: ${p => p.expandable ? "100%" : "500px"};
  padding: 20px 10px;
  max-width: 500px;
  min-width: 350px;

  background: #ebeadf;
  box-shadow: 8px 12px 8px rgba(0, 0, 0, 0.15),
    0px 4px 4px 1000px rgba(255, 252, 227, 0.81);
  border-radius: 20px;
  animation: ${FadeIn} ease-in-out .5s;
  z-index: 100;

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

const OverlayCloseButton = styled.button`
  position: absolute;
  top: 3%;
  right: 8%;
  width: 54px;
  height: 54px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 8px 20px 0 #68612350;

  background: #686123;
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:active {
    background: #686123aa;
  }
`;

const OverlayContent = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Overlay = (props) => {
    return (
      <OverlayStyle expandable={props.expandable} visible={props.visible}>
        <OverlayCloseButton onClick={props.onClose}>✕</OverlayCloseButton>
        <OverlayContent>{props.children}</OverlayContent>
      </OverlayStyle>
    );
}

export default Overlay;