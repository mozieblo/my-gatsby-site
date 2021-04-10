import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <p>About page</p>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  color: white;
  background: violet;
  p {
    text-transform: uppercase;
  }
`;

export default About;
