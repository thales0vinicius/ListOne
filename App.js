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

      <Text style={styles.texto2}>Organize seu trabalho e sua</Text>

      <Text style={styles.texto3}>vida de uma forma simples.</Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/Google.png")} style={styles.img3} />

        <Text style={styles.texto4}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require("./assets/Email.png")} style={styles.img4} />

        <Text style={styles.texto5}>Entrar com E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto6}>Não tenho uma conta...</Text>
      </TouchableOpacity>

      <Text style={styles.texto7}>
        Ao continuar com os serviços acima, você concorda com os "Termos de
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

  input: {
    backgroundColor: "#fff",
    width: "50%",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
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
    width: 230,
    height: 230,
  },

  img3: {
    width: 20,
    height: 20,
    marginLeft: -1,
  },

  img4: {
    width: 27,
    height: 25,
    marginRight: 4,
    marginLeft: -3,
  },

  texto1: {
    color: "#fff",
    fontSize: 30,
  },

  texto2: {
    textAlign: "center",
    color: "#fff",
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
    fontSize: 14,
    marginLeft: 10,
  },

  texto5: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginLeft: 4,
    marginRight: 5,
  },

  texto6: {
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 12,
    gap: 12,
    marginTop: 2,
  },

  texto7: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    marginTop: 30,
  },
});
