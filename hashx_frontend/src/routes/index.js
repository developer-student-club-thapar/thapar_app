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
import PdfView from '../pages/PdfView';
import Hostel from '../pages/Hostel';
import RegisterGoogle from '../pages/RegisterGoogle';
import Landing from '../pages/Landing';
import TimeTable from '../pages/TimeTable';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} isRestricted />
      <Route exact path="/dashboard" component={HomeAlt} isPrivate />
      <Route exact path="/alternate" component={Home} isPrivate />
      <Route
        exact
        path="/course/:content/:id"
        component={CourseDetail}
        isPrivate
      />
      <Route exact path="/pdfview" component={PdfView} isPrivate />
      <Route exact path="/hostel" component={Hostel} isPrivate />
      <Route exact path="/timetable" component={TimeTable} />
      <Route exact path="/private" component={PrivateTest} isPrivate />
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
        isPrivateNew
      />

      {/* <Route component={Home} /> */}
    </Switch>
  );
};

export default Routes;
