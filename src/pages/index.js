import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import FetchData from '../examples/fetchData';
import AllRecipes from '../components/AllRecipes';
import SEO from '../components/SEO';
// import Images from '../examples/Images';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="this is home page" />
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
        </header>
        {/*<FetchData />*/}
        <AllRecipes />
      </main>
      {/*<Images />*/}
    </Layout>
  );
}
