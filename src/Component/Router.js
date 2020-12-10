import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import LoginPage from './LoginPage';
import SplashScreen from './SplashScreen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="splash"
          component={SplashScreen}
          initial={true}
          hideNavBar={true}></Scene>
        <Scene key="login" component={LoginPage} title={'Login'}></Scene>
      </Stack>
    </Router>
  );
};
export default Routes;
