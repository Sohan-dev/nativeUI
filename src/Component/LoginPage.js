import React, {useState} from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import TextFieldInput from '../Common/TextField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [details, setDetails] = useState({});

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
      <Text
        style={{
          left: '40%',
          fontSize: 20,
          fontStyle: 'italic',
          marginTop: '10%',
        }}>
        Login
      </Text>

      <TextFieldInput
        label={'Email'}
        onChangeText={handleChange}
        inputName="email"
      />
      <TextFieldInput label={'Password'} onChangeText={handleChange} />

      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{bottom: '-60%', margin: '10%'}}>
        Press me
      </Button>
    </View>
  );
};
export default LoginPage;

// <TextInput
//         style={{margin: 30, top: '40%'}}
//         label="Email"
//         value={email}
//         mode={'outlined'}
//         label={'Email'}
//         onChangeText={(text) => handleChange(text)}
//       />
//       <TextInput
//         style={{margin: 30, top: '40%'}}
//         label="Password"
//         value={password}
//         mode={'outlined'}
//         label={'Password'}
//         secureTextEntry
//         onChangeText={(text) => handleChange(text)}
//       />
