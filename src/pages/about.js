import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About page is page about about</h2>
            <p>
              Accusantium aliqugni maxime modi nobis pariatur praesentium,
              provident quam quasi quo, quod quos recusandae sequi tempore
              voluptatem
            </p>
            <p>
              Accusantium aliqugni maxime modi nobis pariatur praesentium,
              provident quam quasi quo, quod quos recusandae sequi tempore
              voluptatem
            </p>
            <p>
              Accusantium aliqugni maxime modi nobis pariatur praesentium,
              provident quam quasi quo, quod quos recusandae sequi tempore
              voluptatem
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <article>
            <StaticImage
              src="../assets/images/cereals.jpg"
              alt="cereals"
              layout="fullWidth"
              as="div"
              placeholder="tracedSVG"
              className="about-img"
            />
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default About;
