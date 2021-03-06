import styled from "styled-components";

const Card = styled.div`
  height: 300px;
  width: 300px;
  max-width: 100%;
  border-radius: 20px;
  padding: 12px 10px;
  margin: 5%;
  margin-top: 10%;
  box-shadow: 4px 8px 20px 0 #68612350;
  background: #ffffff50;
  border: 1px solid #686123;
  color: #686123;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.3s;

  h1 {
    color: #3f3a15;
    font-size: 300%;
    margin: 0;
  }

  @media screen and (min-width: 600px) {
    width: 500px;
  }

  &:hover {
    background: #686123;
    h1, h2, h3, h4, h5, h6, p, span, div {
        color: #fff;
    }
  }
`;

export default Card;