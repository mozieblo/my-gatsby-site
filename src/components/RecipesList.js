import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {
  return (
    <>
      <Wrapper>
        {recipes.map(recipe => {
          const { id, title, image, preparationTime, cookTime } = recipe;
          const slug = slugify(title, { lower: true });
          return (
            <Link to={`/${slug}`} className="recipe" key={id}>
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
