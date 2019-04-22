import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.borderView}></View>
          <View style={styles.borderView}><Text>Hola mundo</Text></View>
          <View style={styles.borderView}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.borderView}></View>
          <View style={styles.borderView}></View>
          <View style={styles.borderView}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.borderView}></View>
          <View style={styles.borderView}></View>
          <View style={styles.borderView}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderView: {
    borderWidth: 3,
    color: 'black',
    width: 100,
    height: 100,
    alignItems: 'center',
  }
});
