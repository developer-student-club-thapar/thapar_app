import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Home from '../pages/Home';
import HomeAlt from '../pages/HomeAlt';
import CourseDetail from '../pages/CourseDetail';
import Register from '../pages/Register';
import Login from '../pages/Login';
import StudentDetailsForm from '../pages/StudentDetailsForm';
import Dashboard from '../pages/Dashboard';
import PdfView from '../pages/PdfView';
import Hostel from '../pages/Hostel';
import RegisterGoogle from '../pages/RegisterGoogle';
import TimeTable from '../pages/TimeTable';
import Landing from '../pages/Landing';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={HomeAlt} />
      <Route exact path="/temp" component={Dashboard} />
      <Route exact path="/alternate" component={Home} />
      <Route exact path="/course/:content/:id" component={CourseDetail} />
      <Route exact path="/pdfview" component={PdfView} />
      <Route exact path="/hostel" component={Hostel} />
      <Route exact path="/timetable" component={TimeTable} />
      <Route exact path="/private" component={PrivateTest} />
      <Route exact path="/register" component={Register} isRestricted />
      <Route exact path="/login" component={Login} isRestricted />
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

      {/* <Route component={Home} /> */}
    </Switch>
  );
};

export default Routes;
