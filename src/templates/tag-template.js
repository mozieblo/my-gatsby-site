import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import Layout from '../components/Layout';

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTags($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 200)
        }
        preparationTime
        cookTime
      }
    }
  }
`;

export default TagTemplate;
