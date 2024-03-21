import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      
      <View style={styles.logo}>
        <Image source={require("./assets/Relógio.png")} style={styles.img1} />

        <Text style={styles.texto1}>ListOne</Text>
      </View>

      <Image source={require("./assets/Desenho.png")} style={styles.img2} />

      <Text style={styles.texto2}>Organize seu trabalho</Text>

      <Text style={styles.texto3}>e vida de uma forma</Text>

      <Text style={styles.texto4}>simples.</Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/Google.png")} style={styles.img3} />

        <Text style={styles.texto5}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/Email.png")} style={styles.img4} />

        <Text style={styles.texto6}>Entrar com E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto7}>Não tenho uma conta...</Text>
      </TouchableOpacity>

      <Text style={styles.texto8}>
        Ao continuar com os serviços acima, você concorda com os: "Termos de Serviço" e com a "Política de Privacidade"
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
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  logo: {
    flexDirection: "row",
  },

  img1: {
    width: 25,
    height: 25,
    marginTop: 12,
    marginRight: 7,
  },

  img2: {
    width: 200,
    height: 200,
  },

  img3: {
    width: 20,
    height: 20,
  },

  img4: {
    width: 27,
    height: 25,
  },

  texto1: {
    color: "#fff",
    fontSize: 30,
  },

  texto2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 3,
  },

  texto3: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginTop: -10,
    marginBottom: 15,
  },

  texto4: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginTop: -25,
    marginBottom: 15,
  },

  texto5: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,

  },

  texto6: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },

  texto7: {
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 14,
    marginTop: 2,
  },

  texto8: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    marginTop: 30,
  },
});
