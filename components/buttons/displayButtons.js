// buttons/displayButtons.js 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function DisplayButtons({handleInput, calculateResult, clearInput, input, result , previousValue, operator}) {

    const { theme } = useTheme();

    const displaySequence = `${previousValue} ${operator} ${input}`.trim();
      

    return (
        <View style={[styles.container,  { backgroundColor: theme.background } ]}>
            <View style={styles.displayContainer}>
                <View style={styles.calculation}>
                    <Text style={[styles.calculationText, {color: theme.calculationColor}]}>{displaySequence}</Text>
                </View>
                <View style={styles.result}>
                     <Text style={[styles.resultText, {color: theme.resultColor}]}>{result || "0"}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
               <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => clearInput()}
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("+/-")}
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("%")}
                        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("÷")}
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            ÷
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => handleInput("7")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("8")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("9")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("×")}
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            ×
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => handleInput("4")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("5")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("6")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("-")}
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                           -
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => handleInput("1")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("2")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("3")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("+")}
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                       
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity
                        onPress={() => handleInput(".")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            .
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("0")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleInput("⌫")}
                        style={[styles.button, { backgroundColor: theme.numbButtonBackground}]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                        ⌫
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => calculateResult()}
                        style={[styles.button, { backgroundColor: theme.operatorButtonBackground }]}
                        
                    >
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


}

// Stylesheet

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    displayContainer: {
        flex: 1,
        padding: 10,

    },
    calculation: {
        flex: 0.4,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    result: {
        flex: 0.6,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    calculationText: {
        fontSize: 24,  
        textAlign: 'right',
        marginRight: 10, 
    },
    resultText: {
        fontSize: 48,  
        textAlign: 'right',
        marginRight: 10,  
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