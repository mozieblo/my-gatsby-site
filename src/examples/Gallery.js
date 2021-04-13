import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            backgroundColor: "#7c529c"
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const images = data.allFile.nodes.map(image => getImage(image));

  return (
    <>
      <h2>Simple Gallery</h2>
      <Wrapper>
        {images.map((image, index) => {
          return (
            <GatsbyImage
              key={index}
              alt={data.allFile.nodes[index].name}
              image={image}
              className="image"
            />
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .image {
    border-radius: 50%;
    margin: 5px;
  }
`;

export default Gallery;
