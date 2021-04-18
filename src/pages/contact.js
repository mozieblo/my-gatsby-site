import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want TO Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquid, corporis cum cupiditate deserunt magni maxime
              modi nobis pariatur praesentium, provident quam quasi quo, quod
              quos recusandae sequi tempore voluptatem?
            </p>
            <p>
              maxime modi nobis pariatur praesentium, provident quam quasi quo,
              quod quos recusandae sequi tempore voluptatem?
            </p>
            <p>
              Accusantium aliqugni maxime modi nobis pariatur praesentium,
              provident quam quasi quo, quod quos recusandae sequi tempore
              voluptatem
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mzbyzrlq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
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

export default Contact;
