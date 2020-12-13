import React, {useEffect} from 'react';

import {
  ImageBackground,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import bgImage from '../../assets/splash.jpeg';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      Actions.login();
    }, 2500);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image source={bgImage} style={{width: '100%', height: '100%'}} />
      <View
        style={{position: 'absolute', zIndex: 9, bottom: '10%', left: '40%'}}>
        <ActivityIndicator size={60} color="#dee0e3" />
      </View>
    </View>
  );
};

export default SplashScreen;
// <Text style={{fontSize: 20}}>Huraah this is my first UI 👋👋👋</Text>
// style={{
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#800080',
// }}
