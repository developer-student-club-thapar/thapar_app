import React from 'react';
import { Grid, Divider, Paper } from '@material-ui/core';
import guy from '../assets/guy.svg';
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
import CourseTeam from '../components/CourseTeam/CourseTeam';
import CourseGrid from '../components/CourseGrid/CourseGrid';

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
  team: {
    borderRadius: '40px',
    height: '500px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px',
    textAlign: 'center',
  },
  body: {
    padding: '50px',
  },
  title: {
    fontSize: '1.7rem',
    display: 'inline-block',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  btn: {
    borderRadius: '27px',
    background: '#00293B',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: '30px',
    display: 'grid',
    placeItems: 'center',
    height: '50px',
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
  },
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

const Button = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={0} justify="space-around">
      <Grid item xs={6}>
        <Paper elevation={3} className={styles.btn}>
          SEE ALL
        </Paper>
      </Grid>
    </Grid>
  );
};

const App = () => {
  const styles = useStyles();
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
      <Content className={styles.content}>
        <div className={styles.body}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={10} xl={10}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={8} xl={8}>
                  <CourseGrid />
                </Grid>
                <Grid item xs={12} lg={4} xl={4}>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={10}>
                      <img
                        src={guy}
                        alt="guy"
                        style={{
                          height: '200px',
                          width: '300px',
                          objectFit: 'contain',
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Paper elevation={3} className={styles.team}>
                        <h3 className={styles.title}>YOUR STREAMMATES</h3>
                        <Divider variant="middle" />
                        <CourseTeam />
                        <Button />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Content>
    </Root>
  );
};

export default App;
