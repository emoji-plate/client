import React from "react";
import styled from "styled-components";

const OverlayStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;

  background: #ebeadf;
  box-shadow: 8px 12px 8px rgba(0, 0, 0, 0.15),
    0px 4px 4px 1000px rgba(255, 252, 227, 0.81);
  border-radius: 20px;
  z-index: 100;
`;

const OverlayCloseButton = styled.button`
  position: absolute;
  top: 3%;
  right: 10%;
  width: 54px;
  height: 54px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 700;

  background: #686123;
  border-radius: 100px;
  cursor: pointer;
`;

const OverlayContent = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 10px;
    margin-top: 100px;
`;

const Overlay = (props) => {
    return (
      <OverlayStyle>
        <OverlayCloseButton>X</OverlayCloseButton>
        <OverlayContent>{props.children}</OverlayContent>
      </OverlayStyle>
    );
}

export default Overlay;