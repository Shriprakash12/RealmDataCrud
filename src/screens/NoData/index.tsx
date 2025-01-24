import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/no-data.png')} style={styles.img} />
      <Text style={styles.txt}>Opps! No Data Found Add Data</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    width: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
});
