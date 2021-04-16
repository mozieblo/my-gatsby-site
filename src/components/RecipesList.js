import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const RecipesList = ({ recipes = [] }) => {
  return (
    <>
      <Wrapper>
        {recipes.map(recipe => {
          const { id, title, image, preparationTime, cookTime } = recipe;
          return (
            <Link to={`/${title}`} className="recipe" key={id}>
              <GatsbyImage alt={title} image={getImage(image)} />
              <h5>{title}</h5>
              <p>Preparation time: {preparationTime}</p>
              <p>Cook time: {cookTime}</p>
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .recipe {
    cursor: pointer;
    margin: 10px;
    img {
      border-radius: 20px;
    }
  }
`;

export default RecipesList;
