import React from 'react';
import Layout from '../components/Layout';
import * as style from '../examples/home.module.css';
import { ExampleButton } from '../examples/button';

export default function Home() {
  return (
    <Layout>
      <p className={style.home}>Hello world!</p>
      <ExampleButton onClick={() => console.log('hello')}>
        Click me
      </ExampleButton>
    </Layout>
  );
}
