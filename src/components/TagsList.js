import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import slugify from 'slugify';

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
        let duplicateNumber = 1;
        duplicates.forEach(duplicate => {
          if (tag === duplicate) {
            duplicateNumber++;
          }
        });

        const slug = slugify(tag, { lower: true });
        return (
          <p key={index}>
            <Link to={`/tags/${slug}`} className="tags">
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
