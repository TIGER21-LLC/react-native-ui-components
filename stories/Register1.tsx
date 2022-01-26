import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

interface Register1Props {}

export const Register1 = ({ ...props }: Register1Props) => {
  return (
    <View style={styles.Register1}>
      <View style={styles.Group194}>
        <View style={styles.Register}>
          <Text style={styles.Txt975}>Register</Text>
        </View>
        <View style={styles.Component}>
          <Text style={styles.Txt995}>Email address</Text>
        </View>
        <View style={styles.Component1}>
          <Text style={styles.Txt497}>Create password</Text>
        </View>
        <View style={styles.Button}>
          <Text style={styles.Txt154}>next 111</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Register1: {
    paddingTop: 103,
    paddingBottom: 447,
    paddingLeft: 15,
    paddingRight: 15,
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: "375px",
    height: "812px",
  },
  Group194: {
    display: "flex",
    flexDirection: "column",
  },
  Register: {
    marginBottom: "32px",
    width: "148px",
    height: "40px",
  },
  Txt975: {
    fontSize: 36,
    fontFamily: "Comfortaa, display",
    fontWeight: "400",
    letterSpacing: -0.5,
    color: "rgba(0,0,0,1)",
  },

  Component: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 229,
    marginBottom: "16px",
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "343px",
    height: "52px",
  },
  Txt995: {
    fontSize: 15,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.5)",
  },

  Component1: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 211,
    marginBottom: "16px",
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "343px",
    height: "52px",
  },
  Txt497: {
    fontSize: 15,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,0.5)",
  },

  Button: {
    paddingTop: 17,
    paddingBottom: 16,
    paddingLeft: 151.29,
    paddingRight: 152.71,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "343px",
    height: "52px",
  },
  Txt154: {
    fontSize: 13,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.5,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
});
