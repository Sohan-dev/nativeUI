import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';
function TextFieldInput(props) {
  const onChangeText = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <View>
      <TextInput
        style={{margin: 20, top: '40%', height: 50}}
        value={props.value}
        label={props.label}
        mode={'outlined'}
        name={props.inputName}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(e) => onChangeText(e)}
        // keyboardType={propkeyboardType}
      />
    </View>
  );
}

export default TextFieldInput;
