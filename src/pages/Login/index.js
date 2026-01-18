import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe magni
        illo, eius inventore reprehenderit neque quis aut illum delectus
        perferendis pariatur facere, quod vero itaque laboriosam cumque quo
        optio.
      </Paragrafo>
      <button type="button">Enviar</button>
      <a href="">teste</a>
    </Container>
  );
}
