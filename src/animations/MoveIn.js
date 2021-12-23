import { keyframes } from "styled-components";

const MoveIn = keyframes`
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%);
    }
`;

export default MoveIn;