import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import TextFieldInput from '../Common/TextField';

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

  return (
    <View>
      <Text style={styles.singinText}>Sing In</Text>
      <View style={styles.underLine}></View>
      <View>
        <Text style={styles.informationText}>
          Fillup the below fields to access your Account.
        </Text>
      </View>
      <TextFieldInput
        label={'Email'}
        onChangeText={handleChange}
        inputName="email"
      />
      <TextFieldInput label={'Password'} onChangeText={handleChange} />

      <View>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>

      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.button}>
        Press me
      </Button>
    </View>
  );
};
export default LoginPage;

var styles = StyleSheet.create({
  singinText: {
    left: '40%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  underLine: {
    borderBottomColor: 'black',
    marginHorizontal: '35%',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  informationText: {textAlign: 'center', fontSize: 15, marginTop: 15},
  button: {bottom: '-16%', margin: '10%'},
});
