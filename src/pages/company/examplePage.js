import React from 'react';
import Layout from '../../components/Layout';
import Gallery from '../../examples/Gallery';

const ExamplePage = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Example Page</h1>
        <Gallery />
      </main>
    </Layout>
  );
};

export default ExamplePage;
