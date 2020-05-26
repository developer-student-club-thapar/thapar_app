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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeAlt} />
      <Route exact path="/alternate" component={Home} />
      <Route exact path="/course/:id" component={CourseDetail} />
      <Route exact path="/private" component={PrivateTest} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/studentdetailform" component={StudentDetailsForm} />
      {/* <Route component={Home} /> */}
    </Switch>
  );
};

export default Routes;
