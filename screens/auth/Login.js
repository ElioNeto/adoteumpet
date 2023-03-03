import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe seus dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#fff"
      />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5F5B5B",
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#eee",
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "#887E7E",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#fff",
    borderRadius: 5,
  },

  button: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ff5757",
    color: "#fff",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
