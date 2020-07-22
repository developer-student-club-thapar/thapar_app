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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeAlt} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/alternate" component={Home} />
      <Route exact path="/course/:content/:id" component={CourseDetail} />
      <Route exact path="/pdfview" component={PdfView} />
      <Route exact path="/hostel" component={Hostel} />
      <Route exact path="/private" component={PrivateTest} />
      <Route exact path="/register" component={Register} isRestricted />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registergoogle" component={RegisterGoogle} />
      <Route exact path="/studentdetailform" component={StudentDetailsForm} />

      {/* <Route component={Home} /> */}
    </Switch>
  );
};

export default Routes;
