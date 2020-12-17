import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import text from '../Common/Text.json';
import fingerprintImage from '../../assets/fingerPrint.png';
import TextFieldInput from '../Common/TextField';
import {Actions} from 'react-native-router-flux';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [details, setDetails] = useState({});
  const [checked, setChecked] = useState(false);
  const handleChange = (name, data) => {
    console.log(name, data);

    setDetails((prev) => {
      return {
        ...prev,
        [name]: data,
      };
    });
  };

  const gotoDashBoard = () => {
    Actions.dashboard();
  };

  const gotoSignup = () => {
    Actions.signup();
  };

  return (
    <View style={styles.bgColor}>
      <Text style={styles.singinText}>{text.signinText}</Text>
      <View>
        <Text style={styles.informationText}>{text.loginText}</Text>
      </View>
      <TextFieldInput
        label={'Email'}
        onChangeText={handleChange}
        inputName="email"
      />
      <TextFieldInput
        label={'Password'}
        onChangeText={handleChange}
        secureTextEntry={true}
      />

      <View style={styles.forgotPassword}>
        <Text style={{color: 'white', fontSize: 16}}>Forgot Password</Text>
      </View>

      <View style={{marginTop: 25, marginBottom: 25}}>
        <Image source={fingerprintImage} />
      </View>

      <Button
        mode="contained"
        labelStyle={{fontSize: 20}}
        uppercase={false}
        onPress={gotoDashBoard}
        style={styles.button}>
        {text.loginText}
      </Button>
      <View
        style={{
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            marginBottom: 25,
          }}>
          {text.moreText}
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button
            uppercase={false}
            mode="contained"
            onPress={gotoSignup}
            style={{
              marginRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              backgroundColor: '#d1302b',
              borderRadius: 30,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            {text.applyNow}
          </Button>
          <Button
            uppercase={false}
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              backgroundColor: '#d1302b',
              borderRadius: 30,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            {text.investnow}
          </Button>
        </View>
      </View>
    </View>
  );
};
export default LoginPage;

var styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#164c78',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },

  singinText: {
    color: '#f5fefe',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  informationText: {
    fontSize: 25,
    marginTop: 25,
    marginBottom: 25,
    color: '#f5fefe',
    fontWeight: 'bold',
  },
  forgotPassword: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 45,
    width: '100%',
  },

  button: {
    width: '85%',
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 15,
    backgroundColor: '#d1302b',
    borderRadius: 30,
  },
});
