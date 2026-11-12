import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Intereses y Hobbies</Text>

      <TarjetaHobby
        titulo="Programación y Código"
        detalle="Explorar nuevas librerías en React Native y Node.js"
        nombreIcono="code-slash-outline"
        onPress={() => Alert.alert("Hobby: Programación", "Me encanta construir arquitecturas escalables y probar nuevas herramientas de desarrollo.")}
      />

      <TarjetaHobby
        titulo="Diseño de Bisutería"
        detalle="Creación de manillas artesanales y diseño de marca"
        nombreIcono="color-palette-outline"
        onPress={() => Alert.alert("Hobby: Bisutería", "Investigación de mercados y diseño de pulseras artesanales resistentes e hipoalergénicas.")}
      />

      <TarjetaHobby
        titulo="Videojuegos y Gamificación"
        detalle="Estrategias de niveles y sistemas de rachas"
        nombreIcono="gamecontroller-outline"
        onPress={() => Alert.alert("Hobby: Videojuegos", "Apasionado por las mecánicas de gamificación aplicadas al software y diseño de interfaces.")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contenido: {
    padding: 20,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 16,
  },
});