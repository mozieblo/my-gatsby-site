import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description = '' }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | my-gatsby-site`}
      meta={[
        {
          name: `description`,
          content: description ? description : siteMetadata.description,
        },
      ]}
    ></Helmet>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
export default SEO;
