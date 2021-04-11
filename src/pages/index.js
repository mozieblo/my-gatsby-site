import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
// import Images from '../examples/Images';

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/cookies.jpg"
            alt="cookies"
            layout="fullWidth"
            as="div"
            placeholder="tracedSVG"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply site with recipes</h1>
              <h4>oh yeah it's cool</h4>
            </div>
          </div>
        </header>
      </main>
      {/*<Images />*/}
    </Layout>
  );
}
