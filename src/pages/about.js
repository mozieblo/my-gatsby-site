import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="this is ABOUT page" />
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
        <section className="featured-recipes">
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        preparationTime
        image {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;

export default About;
