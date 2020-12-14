import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import DashboardPage from './Dashboard';
import LoginPage from './LoginPage';
import SplashScreen from './SplashScreen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" component={SplashScreen} hideNavBar={true}></Scene>
        <Scene
          key="login"
          component={LoginPage}
          initial={true}
          hideNavBar={true}></Scene>
        <Scene
          key="dashboard"
          component={DashboardPage}
          title={'Loan Investment Report'}></Scene>
      </Stack>
    </Router>
  );
};
export default Routes;
