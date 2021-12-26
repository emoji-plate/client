import styled from "styled-components";

const ActionSheet = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 85vh;
    width: 90vw;
    background: #fff;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 0 1000px #68612350;
    z-index: 1000;
`;

export default ActionSheet;