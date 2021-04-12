import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';

const Testing = ({ data }) => {
  console.log('props.data: ', data);
  return (
    <Layout>
      <h1>TESTING</h1>
      <h6>{data.site.info.title}</h6>
    </Layout>
  );
};

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`;

export default Testing;
