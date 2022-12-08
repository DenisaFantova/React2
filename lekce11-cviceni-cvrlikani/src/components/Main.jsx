import React from 'react';

import Post from './Post';
import Timeline from './Timeline';

const Main = ({ title, children }) => {
  return (
    <main className="main">
      <h1 className="page-title">{title}</h1>
      <Post>{children}</Post>
      <Timeline>{children}</Timeline>
    </main>
  );
};

export default Main;
