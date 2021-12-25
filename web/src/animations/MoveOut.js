import { keyframes } from "styled-components";

const MoveOut = keyframes`
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-100%);
    }
`;

export default MoveOut;