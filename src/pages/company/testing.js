import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';

const Testing = ({ data }) => {
  return (
    <Layout>
      <main className="page">
        <h1>TESTING</h1>
        <h6>{data.site.info.title}</h6>
      </main>
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
