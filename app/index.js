// app/index.js

import React, {useState} from "react";
import { View, StyleSheet , SafeAreaView } from 'react-native';
import DisplayButtons from "../components/buttons/displayButtons";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import ColorMode from "../components/icons/colormode";


const Index = () => {

  const { theme } = useTheme();

  const [currentInput, setCurrentInput] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (input) => {
    if (["+", "-", "×", "÷"].includes(input)) {
      setOperator(input);
      if (result) {
        setPreviousValue(result);  
        setResult('');  
      } else {
        setPreviousValue(currentInput);
      }
      setCurrentInput('');  
    } else if (input === "%") {
      setCurrentInput((prev) => (parseFloat(prev) / 100).toString());  
    } else if (input === "+/-") {
      setCurrentInput((prev) => (parseFloat(prev) * -1).toString());  
    } else if (input === "⌫") {
      setCurrentInput((prev) => prev.slice(0, -1));  
    } else {
      setCurrentInput((prev) => prev + input); 
    }
  };
  

  const calculateResult = () => {
    if (!previousValue || !currentInput || !operator) {
      setResult("Error");
      return;
    }
  
    let calculation;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentInput);
  
    // Perform calculation
    if (operator === "+") calculation = prev + curr;
    if (operator === "-") calculation = prev - curr;
    if (operator === "×") calculation = prev * curr;
    if (operator === "÷") calculation = prev / curr;
  
    if (!isNaN(calculation)) {
      setResult(calculation.toString());
      setPreviousValue(calculation.toString());  
      setCurrentInput('');  
      setOperator('');  
    } else {
      setResult("Error");
    }
  };
  

  


  const clearInput = () => {
    setCurrentInput('');
    setPreviousValue('');
    setOperator('');
    setResult('');
  };


  return(
    <SafeAreaView style={styles.safeArea}>
         <View style={[styles.container, {backgroundColor: theme.background}]}>
              <View style={styles.topContainer}>
               <ColorMode  />
              </View>
              <View style={styles.midContainer}>
                  <DisplayButtons 
                    handleInput={handleInput} 
                    calculateResult={calculateResult} 
                    clearInput={clearInput}
                    input={currentInput}
                    result={result}
                    previousValue={previousValue}  
                    operator={operator}
                    
                  />
              </View>
          </View>
    </SafeAreaView>
          

  );

};

// stylesheet

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
      flex: 1,
      paddingHorizontal: 10,

  },
  topContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 10,
  },
  midContainer: {
      flex: 7,
  },

});

export default function App() {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}
