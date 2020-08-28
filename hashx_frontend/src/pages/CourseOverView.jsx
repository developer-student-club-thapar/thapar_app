import React from 'react';
import { Grid, Divider, Paper } from '@material-ui/core';
import CourseBox from '../components/CourseBox/CourseBox';
import profile from '../assets/profileImage.svg';
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
import ForumDetail from '../components/ForumDetail/ForumDetail';
import DiscussionPanelMain from '../components/DiscussionPanelMain/DiscussionPanelMain';

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
  papergrid: {
    borderRadius: '40px',
    height: '500px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  coursesgrid: {
    padding: '10px',
  },
  team: {
    borderRadius: '40px',
    height: '320px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px',
    textAlign: 'center',
  },
  body: {
    padding: '50px',
  },
  title: {
    fontSize: '20px',
    display: 'inline-block',
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: '27px',
    background: '#00293B',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginTop: '30px',
    display: 'grid',
    placeItems: 'center',
    height: '30px',
    fontSize: '12px',
    color: 'white',
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

const CourseGrid = () => {
  const styles = useStyles();
  return (
    <Paper elevation={3} className={styles.papergrid}>
      <Grid container spacing={2} className={styles.coursesgrid}>
        {[
          { subject: 'COMPUTER NETWORKS', color: '#4378DB' },
          { subject: 'NUMERICAL ANALYSIS', color: '#FDCD55' },
          { subject: 'OPERATING SYSTEMS', color: '#6036AA' },
          { subject: 'ENGINEERING MATERIALS', color: '#FF846E' },
          { subject: 'ENGINEERING DESIGN', color: '#2B4172' },
          { subject: 'DISCRETE MATHEMATICS', color: '#00293B' },
          {
            subject: 'DATA STRUCTURES & ALGORITHMS',
            color: '#F35555',
          },
        ].map((ele, i) => {
          return <CourseBox subject={ele.subject} color={ele.color} key={i} />;
        })}
      </Grid>
    </Paper>
  );
};

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

const Team = () => {
  const styles = useStyles();
  return (
    <Grid container style={{ marginTop: '20px' }} justify="center">
      <Grid item xs={2}>
        <img
          src={profile}
          alt=" "
          height="40px"
          style={{ borderRadius: '50%' }}
        />
      </Grid>
      <Grid item xs={8} style={{ textAlign: 'left', padding: ' 5px 10px' }}>
        {/* <div> */}
        <h1 style={{ fontSize: '10px', fontWeight: 'bold' }}>
          Divanshu Agarwal
        </h1>
        <h1
          style={{
            fontSize: '10px',
            color: 'gray',
          }}
        >
          @divanshuroxs
        </h1>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

const App = (props) => {
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
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <img
                        src={guy}
                        alt="guy"
                        style={{ height: '160px', width: '300' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Paper elevation={3} className={styles.team}>
                        <h3 className={styles.title}>YOUR STREAMMATES</h3>
                        <Divider variant="middle" />
                        <Team />
                        <Team />
                        <Team />
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
