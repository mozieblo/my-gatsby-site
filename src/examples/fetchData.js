import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
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

const FetchData = () => {
  const {
    site: { info },
  } = useStaticQuery(getData);

  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h1>{info.title}</h1>
      <h4>{info.description}</h4>
      <h6>{info.author}</h6>
      {info.complexData.map((el, index) => {
        return (
          <p key={index}>
            Name is: {el.name} with age {el.age}.
          </p>
        );
      })}
    </div>
  );
};

export default FetchData;
