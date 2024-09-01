// components/icons/colormode.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../context/ThemeContext';

const ColorMode = () => {

    const { theme, isDarkMode, setIsDarkMode } = useTheme();
    const translateX = React.useRef(new Animated.Value(0)).current;

    const toggleTheme = () => {
        Animated.timing(translateX, {
            toValue: isDarkMode ? 0 : 50, 
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.switchContainer, { backgroundColor: theme.switchBackground }]}>
                
                    <Animated.View style={[styles.toggle, { transform: [{ translateX }] }, { backgroundColor: theme.toggleBackground } ]}>
                        <TouchableOpacity onPress={toggleTheme}>
                            <MaterialIcons
                                name={isDarkMode ? "dark-mode" : "light-mode"}
                                size={20}
                                color={isDarkMode ? "#4B5EFC" : "white"}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    switchContainer: {
        width: 90, 
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 5,
    },
    toggle: {
        width: 32, 
        height: 32,
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ColorMode;
