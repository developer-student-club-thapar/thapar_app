// * Wrapper Component to get the complete sidebar layout in any page * //
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLazyQuery, useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarContent,
  getContent,
} from '@mui-treasury/layout';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Nav/Nav';
import { GET_STUDENT, SOCIAL_AUTH } from '../../graphql/AuthQueriesMutations';
import { getAccessToken } from '../../util/token';
import { UserContext } from '../../context/UserProvider';
import { useHistory } from 'react-router-dom';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
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
    marginTop: '1rem',
  },
}));

const LayoutWrapper = ({ children }) => {
  const styles = useStyles();
  const { authenticate, setStudentData, setStudentRefreshedData } = useContext(
    UserContext,
  );
  const history = useHistory();
  // const [
  //   socialMutation,
  //   { loading: socialLoading, error: socialError, data: socialData },
  // ] = useMutation(SOCIAL_AUTH, {
  //   onCompleted: (socialData) => {
  //     if (socialData) {
  //       const { token, user, newUser } = socialData.socialAuth;
  //       console.log(token, 'token');
  //       authenticate(user.id, user.username, token, newUser);
  //       getStudent();
  //     }
  //   },
  // });
  const [
    getStudent,
    { loading: studentLoading, data: studentData, error: studentError },
  ] = useLazyQuery(GET_STUDENT, {
    variables: {
      id: localStorage.getItem('userId'),
    },
    onCompleted: (studentData) => {
      // setStudentData(data);
      setStudentRefreshedData(studentData);
    },
  });

  useEffect(() => {
    // * Fetch user and student details again as soon as a user refreshes the page
    // * fetch-policy: cache => network
    // socialMutation({ variables: { accessToken: getAccessToken() } });
    getStudent();
  }, []);

  if (studentLoading) {
    console.log('fetching...');
  }

  if (studentError) {
    // * If error is encountered, redirect to the landing
    // history.push('/');
    console.log(studentError);

    // TODO clear localStorage Stuff
  }

  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header className={styles.header}>
        <Toolbar>
          <Nav sidebarId="primarySidebar" />
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
      <Content className={styles.content}>{children}</Content>
    </Root>
  );
};

export default LayoutWrapper;
