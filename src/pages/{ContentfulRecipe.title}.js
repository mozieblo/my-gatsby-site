import React from 'react';
import { graphql } from 'gatsby';

const RecipeTemplate = props => {
  console.log(props);

  return (
    <div>
      <h4>{props.params.title}</h4>
      <p>Title: {props.data.contentfulRecipe.title}</p>
      <p>Cook time: {props.data.contentfulRecipe.cookTime}</p>
    </div>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
    }
  }
`;

export default RecipeTemplate;
