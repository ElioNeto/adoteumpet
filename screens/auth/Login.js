import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import Logo from "../../assets/components/logo";

export const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
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
      <View style={styles.forgotView}>
        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
      </View>
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.button2} onPress={() => {}}>
        <Text style={styles.text}>Cadastre-se</Text>
      </Pressable>
    </ScrollView>
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
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#eee",
    fontWeight: 500,
    lineHeight: 30,
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
    lineHeight: 20,
  },
  button: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: "#ff5757",
    color: "#fff",
    fontSize: 24,
  },
  button2: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 18,
    backgroundColor: "rgba(165, 165, 165, 0.1)",
    color: "#fff",
    fontSize: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    lineHeight: 25,
  },
  forgotView: {
    display: "flex",
    alignItems: "flex-end",
  },
  forgot: {
    fontStyle: "normal",
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
  },
  line: {
    height: 3,
    width: 132,
    marginTop: 18,
  },
  lineView: {
    display: "flex",
    justifyContent: "space-around",
  },
});
