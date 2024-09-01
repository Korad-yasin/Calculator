// app/index.js

import React from "react";
import { View, StyleSheet , SafeAreaView } from 'react-native';
import DisplayButtons from "../components/buttons/displayButtons";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import ColorMode from "../components/icons/colormode";


const Index = () => {

  const { theme } = useTheme();

  return(
    <SafeAreaView style={styles.safeArea}>
         <View style={[styles.container, {backgroundColor: theme.background}]}>
              <View style={styles.topContainer}>
               <ColorMode  />
              </View>
              <View style={styles.midContainer}>
                  <DisplayButtons />

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
