import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import backArrow from '../../assets/left-arrow.png';
import text from '../Common/Text.json';
import CardComponent from './CardComponent';
const DashboardPage = () => {
  return (
    <View style={{backgroundColor: '#f2f2f2'}}>
      <Appbar style={styles.bottom}>
        <Image source={backArrow} style={styles.backButton} />
        <Text
          style={{
            fontSize: 22,
            lineHeight: 80,
            color: '#d2ebf5',
            textAlign: 'center',
            width: '90%',
          }}>
          {text.appBarText}
        </Text>
      </Appbar>
      <View style={{backgroundColor: '#f2f2f2', height: '100%'}}>
        <CardComponent />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 80,
    backgroundColor: '#174c78',
    alignItems: 'center',
    paddingLeft: 20,
  },
  backButton: {
    height: 20,
    width: 20,
    marginTop: 3,
  },
});
export default DashboardPage;
