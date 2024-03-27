import {StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, } from "react-native";
import {useFonts} from 'expo-font';
export default function App() {

  const [fontsLoaded] = useFonts({
    'MadimiOne-Regular': require('./assets/fonts/MadimiOne-Regular.ttf'),
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.logo}>
        <Image source={require("./assets/relógio.png")} style={styles.img1} />
        <Text style={styles.texto1}>ListOne</Text>
      </View>
      <Image source={require("./assets/desenho.png")} style={styles.img2} />
      <Text style={styles.texto2}>Organize seu trabalho</Text>
      <Text style={styles.texto3}>e vida de uma forma</Text>
      <Text style={styles.texto4}>simples.</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/google.png")} style={styles.img3} />
        <Text style={styles.texto5}>Entrar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/email.png")} style={styles.img3} />
        <Text style={styles.texto5}>Entrar com E-mail</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.texto6}>Não tenho uma conta...</Text>
      </TouchableOpacity>
      <Text style={styles.texto7}>
        Ao continuar com os serviços acima, você concorda com os: "Termos de
        Serviço" e com a "Política de Privacidade"
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#140D0D",
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#140D0D",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 8,
    flexDirection: "row",
  },

  logo: {
    flexDirection: "row",
  },

  img1: {
    width: 25,
    height: 25,
    marginTop: 8,
    marginRight: 5,
  },

  img2: {
    width: 200,
    height: 200,
  },

  img3: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 15,
  },

  texto1: {
    color: "#fff",
    fontSize: 30,
    fontFamily: 'MadimiOne-Regular',
  },

  texto2: {
    color: "#fff",
    fontSize: 25,
    marginTop: 3,
    fontFamily: 'BebasNeue-Regular',
  },

  texto3: {
    color: "#fff",
    fontSize: 25,
    marginTop: -10,
    fontFamily: 'BebasNeue-Regular',
  },

  texto4: {
    color: "#fff",
    fontSize: 25,
    marginTop: -10,
    marginBottom: 15,
    fontFamily: 'BebasNeue-Regular',
  },

  texto5: {
    color: "#fff",
    fontSize: 14,
    marginRight: 15,
  },

  texto6: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 14,
  },

  texto7: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    marginTop: 40,
  },
});
