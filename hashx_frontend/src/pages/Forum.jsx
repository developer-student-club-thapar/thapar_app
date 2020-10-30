import React from 'react';
import { useParams } from 'react-router-dom';
import ForumDetail from '../components/ForumDetail/ForumDetail';
import DiscussionPanelMain from '../components/DiscussionPanelMain/DiscussionPanelMain';
import LayoutWrapper from '../components/Layout/Layout';

const renderPage = (page) => {
  switch (page) {
    case 'forum-details':
      return <ForumDetail />; //TODO add file-ID as a prop

    case 'discussion-panel':
      return <DiscussionPanelMain />;
    default:
      return <ForumDetail />;
  }
};

const Forum = () => {
  const { page } = useParams();
  return <LayoutWrapper>{renderPage(page)}</LayoutWrapper>;
};

export default Forum;
