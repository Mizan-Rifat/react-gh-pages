import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This is Home page</h1>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
