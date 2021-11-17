import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
