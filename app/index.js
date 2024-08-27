// app/index.js

import { Text, View, SafeAreaView } from "react-native";
import CalculatorScreen from "@/components/screens/CalculatorScreen";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}
