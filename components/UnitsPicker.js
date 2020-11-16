import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        mode="dropdown"
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    fontSize: 12,
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 20,
      },
    }),
    left: 20,
    height: 90,
    width: 100,
    top: 20,
  },
});
