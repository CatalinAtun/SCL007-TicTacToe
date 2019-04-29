import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Grid extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                    <View style={styles.borderView}></View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    borderView: {
        borderWidth: 3,
        color: 'black',
        width: 100,
        height: 100,
        alignItems: 'center',
    }
});