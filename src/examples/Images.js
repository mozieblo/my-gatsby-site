import React from 'react';
import styled from 'styled-components';
import cake from '../assets/images/cake.jpg';

const Images = () => {
  return (
    <Wrapper>
      <img src={cake} alt="cake" />
      <h2>gatsby image</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`;

export default Images;
