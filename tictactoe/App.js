import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row'}}>
          <View style={[styles.borderView, { borderRightWidth: 1, borderBottomWidth: 1 }]}>
          <Icon name="close" style={styles.xStyle}/></View>
        
          <View style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1 }]}>
          <Icon name="circle-outline" style={styles.oStyle}/></View>
          
          <View style={[styles.borderView, { borderRightWidth: 2, borderLeftWidth: 1, borderBottomWidth: 1 }]}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={[styles.borderView, { borderRightWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}></View>
          <View style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}></View>
          <View style={[styles.borderView, { borderLeftWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={[styles.borderView, { borderRightWidth: 1, borderTopWidth: 1 }]}></View>
          <View style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderTopWidth: 1 }]}></View>
          <View style={[styles.borderView, { borderLeftWidth: 1, borderTopWidth: 1 }]}></View>
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
    borderWidth: 2,
    color: 'black',
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  xStyle: {
    color: "red",
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  oStyle: {
    color: "green",
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  }
});
