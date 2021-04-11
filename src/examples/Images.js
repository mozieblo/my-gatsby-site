import React from 'react';
import styled from 'styled-components';
// import cake from '../assets/images/cake.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Images = () => {
  return (
    <Wrapper>
      {/*React way: size is not change 29MB, and jumping text until img loaded*/}
      {/*<img src={cake} alt="cake" />*/}
      {/*With Gatsby Plugin Image: no jump (placeholder instead) and size is smaller (110kb)*/}
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/cake.jpg"
          alt="cake with gatsby plugin"
          height={600}
          width={600}
          className="example-img"
          layout="constrained"
          placeholder="tracedSVG"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/cake.jpg"
          alt="cake with gatsby plugin"
          width={200}
          className="example-img"
          layout="fixed"
          placeholder="blurred"
          as="div"
        />
      </article>
      <article>
        <h4>fullWidth</h4>
        <StaticImage
          src="../assets/images/cake.jpg"
          alt="cake with gatsby plugin"
          // height={600} cannot add height/width to full width! error in console
          // width={600}
          className="example-img"
          layout="fullWidth"
          placeholder="dominantColor"
          as="article"
        />
      </article>
      <h2>gatsby image</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //img {
  //  width: 200px !important;
  //}
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid green;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Images;
