import React from 'react';
import RecipesList from './RecipesList';
import TagsList from './TagsList';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title }) {
      nodes {
        id
        title
        cookTime
        preparationTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const recipes = useStaticQuery(query);
  const {
    allContentfulRecipe: { nodes },
  } = recipes;
  const tags = nodes.map(el => {
    return el.content.tags;
  });

  return (
    <Wrapper>
      <RecipesList recipes={nodes} />
      <TagsList tags={tags} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export default AllRecipes;
