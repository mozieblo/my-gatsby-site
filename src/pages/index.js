import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div>
      <p>Hello world!</p>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/company">Company</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
    </div>
  );
}
