import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import CourseDetail from '../pages/CourseDetail';
import Register from '../pages/Register';
import Login from '../pages/Login';
import StudentDetailsForm from '../pages/StudentDetailsForm';
import Dashboard from '../pages/Dashboard';
import PdfView from '../pages/PdfView';
import Hostel from '../pages/Hostel';
import RegisterGoogle from '../pages/RegisterGoogle';
import Landing from '../pages/Landing';
import PageNotFound from '../pages/404';
import VirtualCampus from '../pages/VirtualCampusPage';
import Forum from '../pages/Forum';
import CousesOverview from '../pages/CourseOverView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard/:page" component={Dashboard} />
      <Route exact path="/courses-overview" component={CousesOverview} />
      <Route exact path="/course/:content/:id" component={CourseDetail} />
      <Route exact path="/courses" component={CourseDetail} />
      <Route exact path="/pdfview" component={PdfView} />
      <Route exact path="/hostel" component={Hostel} />
      {/* <Route exact path="/timetable" component={TimeTable} /> */}
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
        New
      />
      <Route exact path="/forum/:page" component={Forum} />
      <Route path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
