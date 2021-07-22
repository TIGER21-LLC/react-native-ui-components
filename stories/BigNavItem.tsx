import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface BigNavItemProps {
  icon: any;
  label: string;
}

export const BigNavItem = ({ icon, label, ...props }: BigNavItemProps) => {
  return (
    <TouchableOpacity style={styles.navItem}>
      <MaterialCommunityIcons name={icon} size={80} color="white" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
    // TODO add configurable action/navigation on item press
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20, // TODO add custom font too, have come from theme
  },
  navItem: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
    width: 130,
    height: 150,
    minWidth: 130,
    backgroundColor: "#7C828A", // TODO have come from theme
    borderRadius: 10,
  },
  navItemIcon: {
    // alignContent: "center",
    // flex: 1,
    // alignSelf: "center",
  },
});

export default BigNavItem;
