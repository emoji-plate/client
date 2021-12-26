import styled, { keyframes } from "styled-components";

const MoveIn = keyframes`
    from {
        bottom: -100%;
    }
`;

const ActionSheet = styled.div`
    display: ${p => p.visible ? "block" : "none"};
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
    animation: ${MoveIn} 1s ease-in-out;
`;

export default ActionSheet;