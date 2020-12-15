import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import text from '../Common/Text.json';

const SignupPage = () => {
  return (
    <View style={styles.bgColor}>
      <Text style={styles.welcomeText}>{text.signinText}</Text>
      <View>
        <Text style={styles.signupText}>{text.signUp}</Text>
      </View>
    </View>
  );
};

export default SignupPage;

var styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#164c78',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  welcomeText: {
    color: '#f5fefe',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 25,
    marginTop: 25,
    marginBottom: 25,
    color: '#f5fefe',
    fontWeight: 'bold',
  },
});
