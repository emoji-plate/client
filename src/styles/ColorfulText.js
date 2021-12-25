import styled from "styled-components";

const ColorfulText = styled.span`
  font-size: ${(p) => p.fontSize || "120%"};
  color: transparent;
  background: linear-gradient(180deg, #3f3a15 0%, #c4b54d 100%);
  background-clip: text;
  -webkit-background-clip: text;
`;

export default ColorfulText;