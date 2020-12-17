import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import DashboardPage from './Dashboard';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          component={LoginPage}
          initial={true}
          hideNavBar={true}></Scene>
        <Scene
          key="dashboard"
          component={DashboardPage}
          hideNavBar={true}></Scene>
        <Scene key="signup" component={SignupPage} hideNavBar={true}></Scene>
      </Stack>
    </Router>
  );
};
export default Routes;
