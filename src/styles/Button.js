import styled, { css } from "styled-components";

const ButtonPrimary = css`
  min-width: 236px;
  min-height: 67px;
  font-size: 24px;

  background: linear-gradient(180.52deg, #fffce3 0.45%, #e6db7f 300.35%);
  box-shadow: 4px 8px 8px rgba(56, 56, 56, 0.07);
  border-radius: 25px;
`;

const ButtonSecondary = css`
  max-width: 100%;
  min-height: 67px;
  font-size: 24px;

  background: linear-gradient(180.52deg, #fffce3 0.45%, #ffffff 300.35%);
  box-shadow: 4px 8px 8px rgba(56, 56, 56, 0.07);
  border-radius: 25px;
`;

const ButtonDefault = css`
  max-width: 100%;
  min-height: 67px;
  font-size: 24px;

  background: linear-gradient(180.52deg, #fcf6c3 0.45%, #e6db7f 300.35%);
  box-shadow: 4px 8px 8px rgba(56, 56, 56, 0.07);
  border-radius: 25px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  color: #686123;
  margin: 0;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 600px) {
    font-size: 100%;
  }
  ${(p) =>
    p.primary === true
      ? ButtonPrimary
      : p.secondary === true
      ? ButtonSecondary
      : ButtonDefault}
`;

export default Button;