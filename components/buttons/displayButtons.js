// buttons/displayButtons.js 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function DisplayButtons() {

    const { theme } = useTheme();

    return (
        <View style={[styles.container,  { backgroundColor: theme.background } ]}>
            <View style={styles.displayContainer}>
            </View>
            <View style={styles.buttonContainer}>
               <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            ÷
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            ×
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            −
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            .
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                        ⌫
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: 'gold',
    },
    buttonContainer: {
        flex: 4,
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    button: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        margin: 2,
        padding: 10,

    },
    buttonText: {
        fontSize: 30,

    },
    
    
});