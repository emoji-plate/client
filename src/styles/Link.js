import styled, { css } from "styled-components";

const LinkDefault = css`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;

  color: #686123;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 18px;
  cursor: pointer;
  transition: .1s;
`;

const Link = styled.a`
  ${LinkDefault}

  &:hover {
    background: #686123;
    color: #fff;
  }
`;

export default Link;