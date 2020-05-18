import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateTest from '../pages/PrivateTest';
import Route from './Route';
import Home from '../pages/Home';
import HomeAlt from '../pages/HomeAlt';
import CourseDetail from '../pages/CourseDetail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeAlt} />
      <Route exact path="/alternate" component={Home} />
      <Route exact path="/course/:id" component={CourseDetail} />
      <Route exact path="/private" component={PrivateTest} />
      {/* <Route component={Home} /> */}
    </Switch>
  );
};

export default Routes;
