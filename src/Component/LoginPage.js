import React from 'react';
import {ImageBackground, Text, View, Image, TextInput} from 'react-native';
const LoginPage = () => {
  const [text, setText] = React.useState('');
  return (
    <View>
      <Text>Username</Text>
      <TextInput editable maxLength={40} />
    </View>
  );
};
export default LoginPage;
