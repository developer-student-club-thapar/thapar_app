import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Register from '../pages/Register';
import Login from '../pages/Login';
import StudentDetailsForm from '../pages/StudentDetailsForm';
import RegisterGoogle from '../pages/RegisterGoogle';
import Landing from '../pages/Landing';
import PageNotFound from '../pages/404';
import LayoutWrapper from '../components/Layout/Layout';
import RocketAnimation from '../components/RocketAnimation';

// * Lazy Imports => Splitting the bundle in multiple parts and only calling them when required. Decreases Webpage loadtime * //
// * Use only if the component takes more than 30kb in webpack bundle * //
const Dashboard = lazy(() => import('../pages/Dashboard'));
const CoursesOverview = lazy(() => import('../pages/CourseOverView'));
const CourseDetail = lazy(() => import('../pages/CourseDetail'));
const TimeTable = lazy(() => import('../components/Timetable/TimeTable'));
const Forum = lazy(() => import('../pages/Forum'));
const Hostel = lazy(() => import('../pages/Hostel'));
const PdfView = lazy(() => import('../pages/PdfView'));
const VirtualCampus = lazy(() => import('../pages/VirtualCampusPage'));
const ForumDetail = lazy(() => import('../components/ForumDetail/ForumDetail'));
const DiscussionsPanel = lazy(() =>
  import('../components/DiscussionPanelMain/DiscussionPanelMain'),
);

const Routes = () => {
  return (
    <Suspense
      fallback={
        <LayoutWrapper>
          <RocketAnimation />
        </LayoutWrapper>
      }
    >
      <Switch>
        <Route exact path="/" component={Landing} isRestricted />
        <Route exact path="/dashboard" component={Dashboard} isPrivate />
        <Route
          exact
          path="/courses-overview"
          component={CoursesOverview}
          isPrivate
        />
        <Route exact path="/courses/:id/:content" component={CourseDetail} />
        <Route exact path="/pdfview" component={PdfView} isPrivate />
        <Route exact path="/hostel" component={Hostel} isPrivate />
        <Route exact path="/timetable" component={TimeTable} isPrivate />
        <Route exact path="/private" component={PrivateTest} />
        <Route exact path="/register" component={Register} isRestricted />
        <Route exact path="/login" component={Login} isRestricted />
        <Route exact path="/campus-tour" component={VirtualCampus} />
        <Route
          exact
          path="/registergoogle"
          component={RegisterGoogle}
          isRestricted
        />
        <Route
          exact
          path="/studentdetailform"
          component={StudentDetailsForm}
          isPrivate
        />
        <Route
          exact={true}
          path="/forum/discussion-panel/:id"
          render={(props) => (
            <Forum>
              <DiscussionsPanel {...props} />
            </Forum>
          )}
          isPrivate
        />
        <Route
          exact={true}
          path="/forum/forum-details/:fileId"
          render={(props) => (
            <Forum>
              <ForumDetail {...props} />
            </Forum>
          )}
          isPrivate
        />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
