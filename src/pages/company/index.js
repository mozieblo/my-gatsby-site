import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const Company = () => {
  return (
    <Layout>
      <Wrapper>
        <p>COMPANY</p>
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

export default Company;
