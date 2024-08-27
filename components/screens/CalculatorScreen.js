//CalculatorScreen.js
import React from "react";
import { View, StyleSheet, Text , ActivityIndicator } from 'react-native';


const CalculatorScreen = () => {

    return(
            <View style={styles.container}>
               <Text>Hello World</Text>
            </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        justifyContent: 'center',
        alignItems: 'center',

    },



});

export default CalculatorScreen;