import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  outline: none;
}

body{
  font-family: sans-serif;
  background: ${primaryDarkColor};
  color: ${primaryColor};
}

html, body, #root{
  height: 100%;
}

button{
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color: ${primaryColor};
}

ul{
  list-style: none;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
