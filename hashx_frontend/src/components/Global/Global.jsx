/* eslint-disable import/no-duplicates */
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  // getFixedScheme,
} from '@mui-treasury/layout';
import Layout from '@mui-treasury/layout';

export const Header = getHeader(styled);
export const DrawerSidebar = getDrawerSidebar(styled);
export const SidebarTrigger = getSidebarTrigger(styled);
export const SidebarContent = getSidebarContent(styled);
export const CollapseBtn = getCollapseBtn(styled);
export const Content = getContent(styled);
export const Footer = getFooter(styled);

// const fixedScheme = getFixedScheme();
export const scheme = Layout();

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

export const useStyles = makeStyles(() => ({
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
