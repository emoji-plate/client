import styled, { keyframes } from "styled-components";

const MoveIn = keyframes`
    from {
        bottom: -100%;
    }
`;

const ActionSheet = styled.div`
  display: ${(p) => (p.visible ? "block" : "none")};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 75vh;
  width: 90vw;
  background: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 0 1000px #68612350;
  z-index: 1000;
  animation: ${MoveIn} .5s ease-in-out;
  padding: 6%;
  padding-top: 5%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 4%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 100px;
  background: #686123;
  box-shadow: 2px 4px 20px 0 #68612350;
  transition: .3s;

  &:hover {
    background: #686123af;
  }
`;

export default ActionSheet;