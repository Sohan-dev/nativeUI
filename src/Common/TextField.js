import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';
function TextFieldInput(props) {
  const onChangeText = (e) => {
    console.log(e);
  };

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#90c3e6',
      }}>
      <TextInput
        style={{
          fontSize: 18,
          width: '90%',
          backgroundColor: '#1c557f',
          marginBottom: 12,
        }}
        value={props.value}
        label={props.label}
        theme={{
          colors: {
            text: '#90c3e6',
            placeholder: '#90c3e6',
            primary: '#90c3e6',
          },
          // fonts: {text: 30},
        }}
        allowFontScaling={false}
        mode={'outlined'}
        selectionColor={'#90c3e6'}
        name={props.inputName}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(e) => onChangeText(e)}
        // keyboardType={propkeyboardType}
      />
    </View>
  );
}

export default TextFieldInput;
