import styled, { css } from "styled-components";

const HeaderDefault = css`
  font-size: ${(p) => p.fontSize};
  color: #686123;
`;

const HeaderPrimary = css`
    font-size: ${(p) => p.fontSize};
    color: #3F3A15;
`;

const HeaderSecondary = css`
  font-size: ${(p) => p.fontSize};
  color: #686123;
`;

const Header = styled.header`
    font-weight: 700;
    ${(p) => p.primary === true ? HeaderPrimary : p.secondary === true ? HeaderSecondary : HeaderDefault}
`;

export default Header;