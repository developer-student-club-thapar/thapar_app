import React from 'react';
import LayoutWrapper from '../components/Layout/Layout';
import ForumExplore from '../components/ForumExplore/ForumExplore'


const Forum = ({ children }) => {
  return (
    <LayoutWrapper>
      <ForumExplore />
    </LayoutWrapper>
  )
};

export default Forum;
