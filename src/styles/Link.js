import styled, { css } from "styled-components";

const LinkDefault = css`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: none;
  padding: 8px;
  color: #686123;
  border-radius: 25px;
  cursor: pointer;
  transition: .1s;
`;

const Link = styled.a`
  ${LinkDefault}

  ${(p) =>
    p.hover &&
    `&:hover {
    background: #686123;
    color: #fff;
  }`}
`;

export default Link;