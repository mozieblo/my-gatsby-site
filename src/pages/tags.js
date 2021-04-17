import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: tags },
  },
}) => {
  console.log('TAGS: ', tags);
  const newTags = {};

  tags.forEach(content => {
    content.content.tags.forEach(tag => {
      if (newTags[tag]) {
        newTags[tag]++;
      } else {
        newTags[tag] = 1;
      }
    });
  });

  const tagsInOrder = Object.entries(newTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;

    return firstTag.localeCompare(secondTag);
  });

  console.log(newTags);
  console.log(tagsInOrder);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tagsInOrder.map((tag, index) => {
            const [food, number] = tag;
            return (
              <Link to={`/${food}`} key={index} className="tag">
                <h5>{food}</h5>
                <p>{number} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
