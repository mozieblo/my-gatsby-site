import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/Bs';
import Layout from '../components/Layout';

const RecipeTemplate = props => {
  const {
    title,
    cookTime,
    preparationTime,
    servings,
    image,
    description: { description },
    content: { ingredients, instructions, tags, tools },
  } = props.data.contentfulRecipe;

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              alt={title}
              image={getImage(image)}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Preparation Time:</h5>
                  <p>{preparationTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook time:</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings:</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((instruction, index) => {
                const i = index + 1;
                return (
                  <div className="single-instruction">
                    <header>
                      <p>step {i}</p>
                    </header>
                    <p>{instruction}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      preparationTime
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          width: 200
        )
      }
      content {
        ingredients
        instructions
        tools
        tags
      }
      servings
      description {
        description
      }
    }
  }
`;

export default RecipeTemplate;
