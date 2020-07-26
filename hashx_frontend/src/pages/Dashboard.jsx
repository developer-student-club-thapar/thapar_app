import React from 'react';
import styled from 'styled-components';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getFixedScheme,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { TextSidebar } from '@mui-treasury/mockup/sidebars';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const fixedScheme = getFixedScheme();

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
    backgroundColor: '#f9f9f9',
  },
}));

const CustomStylesDemo = () => {
  const styles = useStyles();
  return (
    <Root scheme={fixedScheme}>
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
        <SidebarContent>{/* <TextSidebar /> */}</SidebarContent>
        <CollapseBtn className={cx(styles.collapseBtn)} />
      </DrawerSidebar>
      <Content className={styles.content}>
        <ContentMockUp />
      </Content>
      <Footer>
        <FooterMockUp />
      </Footer>
    </Root>
  );
};

export default CustomStylesDemo;
