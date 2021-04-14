import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TagsList = ({ tags }) => {
  const oneTagsList = [];

  tags.forEach(tagsLists => {
    tagsLists.map(tag => oneTagsList.push(tag));
  });

  const uniqueTags = [...new Set(oneTagsList)];

  let duplicates = [...oneTagsList];
  uniqueTags.forEach(item => {
    const i = duplicates.indexOf(item);
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length));
  });

  return (
    <div>
      <h3>Recipes:</h3>
      {uniqueTags.map((tag, index) => {
        let duplicateNumber = 0;
        duplicates.forEach(duplicate => {
          if (tag === duplicate) {
            duplicateNumber++;
          }
        });
        return (
          <p key={index}>
            <Link to="/" className="tags">
              {tag} <span>({duplicateNumber})</span>
            </Link>
          </p>
        );
      })}
    </div>
  );
};

const Wrapper = styled.section`
  .tags {
    cursor: pointer;
  }
`;

export default TagsList;
