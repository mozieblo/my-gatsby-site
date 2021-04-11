import React from 'react';
import Layout from '../../components/Layout';
import { ExampleButton } from '../../examples/button';
import * as style from '../../examples/history.module.css';

const History = () => {
  return (
    <Layout>
      <p className={style.history}>Company/history</p>
      <ExampleButton onClick={() => console.log('hello')}>
        Click me
      </ExampleButton>
    </Layout>
  );
};

export default History;
