import React, {useState} from 'react';
import {Appbar, Card} from 'react-native-paper';
import {Text, View, StyleSheet, Image} from 'react-native';

const CardComponent = () => {
  return (
    <Card style={{margin: 20}}>
      <View style={{margin: 10}}>
        <Text>Application No.</Text>
        <Text style={{marginTop: 18, fontSize: 16}}>0.00</Text>
        <Text style={{fontSize: 18, marginTop: 13, marginBottom: 13}}>
          Borrower Id
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>Contribution Amount</Text>
          <Text style={{marginLeft: 40}}>: 0.00</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Principal Balance Received</Text>
          <Text style={{marginLeft: 40}}>: 0.00</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Principal Balance Left</Text>
          <Text style={{marginLeft: 40}}>: 0.00</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardComponent;
