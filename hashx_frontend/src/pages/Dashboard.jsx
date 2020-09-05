import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { useParams } from 'react-router-dom';
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getContent,
} from '@mui-treasury/layout';
import { HeaderMockUp } from '@mui-treasury/mockup/layout';
import Sidebar from '../components/Sidebar/Sidebar';

import HomeAlt from './HomeAlt';
import Timetable from '../components/Timetable/Timetable';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);

const Content = getContent(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig('xs', {
    position: 'sticky',
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create('primarySidebar', { anchor: 'left' })
    .registerTemporaryConfig('xs', {
      anchor: 'left',
      width: '40vw',
    })
    .registerTemporaryConfig('sm', {
      anchor: 'left',
      width: '20vw',
    })
    .registerPermanentConfig('lg', {
      width: '12vw',
      persistentBehavior: {
        whatever_id: 'fit',
        _others: 'none',
      },
    });
});

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#F0F0F3',
  },
  collapseBtn: {
    color: '#fff',
    minWidth: 0,
    width: 40,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.24)',
    margin: '0 auto 16px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.38)',
    },
  },
  sidebar: {
    backgroundColor: '#00293B',
    border: 'none',
  },
  content: {
    backgroundColor: '#F0F0F3',
  },
}));

function renderPage(page) {
  console.log(page);
  switch (page) {
    case 'home':
      return <HomeAlt />;
    case 'timetable':
      return <Timetable />;
    default:
      return <HomeAlt />;
  }
}

const Dashboard = () => {
  const styles = useStyles();
  const { page } = useParams();
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header className={styles.header}>
        <Toolbar>
          <SidebarTrigger sidebarId="primarySidebar" />
          <HeaderMockUp />
        </Toolbar>
      </Header>
      <DrawerSidebar
        sidebarId="primarySidebar"
        PaperProps={{ className: styles.sidebar }}
      >
        <SidebarContent>
          <Sidebar />
        </SidebarContent>
      </DrawerSidebar>
      <Content className={styles.content}>{renderPage(page)}</Content>
    </Root>
  );
};

export default Dashboard;
