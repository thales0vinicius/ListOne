import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('./assets/Relógio.png')} style={styles.img1}
        />
        <Text style={styles.texto1}>ListOne</Text>
      </View>
      <Image
        source={require('./assets/desenho.png')} style={styles.img2}
      />
      <Text style={styles.texto2}>
        Organize seu trabalho e sua
      </Text >
      <Text style={styles.texto3}>
        vida de uma forma simples.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./assets/Google.png')} style={styles.img3}
        />
        <Text style={styles.texto4}>
          Entrar com Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./assets/Email.png')} style={styles.img4}
        />
        <Text style={styles.texto4}>
          Entrar com E-mail
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto5}>
        Não tenho uma conta...
      </Text>
      <Text style={styles.texto6}>
        Ao continuar com os serviços acima, você concorda com os "Termos de Serviço" e com a "Política de Privacidade"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#140D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: "#fff",
    width: '50%',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: "#140D0D",
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  logo: {
    flexDirection: 'row',
  },

  img1: {
    marginTop: 7,
    marginRight: 10,
    width: 25,
    height: 24,
  },

  img2: {
    width: 250,
    height: 240,
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
    fontSize: 24
  },

  texto2: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },

  texto3: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 10,
  },

  texto4: {
    color: "#fff",
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 14,
  },

  texto5: {
    color: "#fff",
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 12,
    marginTop: 2,
    gap: 12,
  },

  texto6: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
  },
});
