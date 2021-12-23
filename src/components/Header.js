import styled, { css } from "styled-components";

export const FONT_SIZES = {
    large: "50px",
    midLarge: "38px",
    medium: "30px",
    midSmall: "24px",
    small: "20px"
};

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
    ${(p) => p.primary === true ? HeaderPrimary : p.secondary ? HeaderSecondary : HeaderDefault}
`;

export default Header;