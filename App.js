import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inder-Regular': require('./assets/fonts/Inder-Regular.ttf'),
  });

  return (
    <View style={estilos.container}>
      <TouchableOpacity>
        <Image source={require("./assets/Voltar.png")} style={estilos.voltar} />
      </TouchableOpacity>
      <Text style={estilos.texto1}>
        Inscreva-se!
      </Text>

      <Text style={estilos.texto2}>
        Adicione seu e-mail e senha.
      </Text>

      <View style={estilos.caixa}>
        <TextInput
          placeholder='Digite seu e-mail...'
          placeholderTextColor={"#7e7a7a"}
          style={estilos.input}
          keyboardType="email-address" />

        <TextInput
          placeholder='Digite sua senha...'
          placeholderTextColor={"#7e7a7a"}

          style={estilos.input}
          secureTextEntry={true} />
      </View>

      <View style={estilos.caixabtn}>
        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.texto3}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#140D0D',
    Color: "#fff",
    flex: 1,
    gap: 8,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  texto1: {
    color: "#fff",
    fontSize: 36,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Inder-Regular',
  },

  texto2: {
    color: "#fff",
    fontSize: 20,
    marginTop: -10,
    marginLeft: 10,
    fontFamily: 'Inder-Regular',
  },

  texto3: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Inder-Regular',
  },

  input: {
    backgroundColor: '#140D0D',
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: "80%",
    fontSize: 16,
    paddingLeft: 26,
    fontFamily: 'Inder-Regular',
  },

  button: {
    backgroundColor: "#E80707",
    paddingHorizontal: 38,
    paddingVertical: 10,
    borderRadius: 28,
    fontFamily: 'Inder-Regular',
  },

  voltar: {
    marginTop: 40,
    marginLeft: 15,
  },

  caixa: {
    alignItems: 'center',
    paddingTop: 40,
    gap: 18,
  },

  caixabtn: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 18,
  },

});