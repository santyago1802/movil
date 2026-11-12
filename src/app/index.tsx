import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      {/* Avatar y Datos Personales */}
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      {/* Perfil Profesional */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles y web. 
          Con habilidades en React Native, JavaScript, HTML5, Python y gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      {/* Sección de Contacto e Interactividad (Reto Obligatorio) */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => Alert.alert("Contacto", "Correo: pepito.perez@misena.edu.co")}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          onPress={() => Alert.alert("Teléfono", "Celular: +57 300 123 4567")}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          onPress={() => Alert.alert("LinkedIn", "linkedin.com/in/pepito-perez-adso")}
        />

        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877f2"
          onPress={() => Alert.alert("Facebook", "facebook.com/pepito.sena")}
        />

        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#e1306c"
          onPress={() => Alert.alert("Instagram", "@pepito_dev")}
        />

        <MiBoton
          textoBoton="TikTok"
          nombreIcono="logo-tiktok"
          colorBoton="#000000"
          onPress={() => Alert.alert("TikTok", "@pepito.adso")}
        />

        <MiBoton
          textoBoton="Repositorio Git"
          nombreIcono="logo-github"
          colorBoton="#333333"
          onPress={() => Alert.alert("GitHub", "github.com/santyago1802/movil")}
        />
      </View>
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
  avatarContenedor: {
    alignItems: "center",
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
  },
  profesion: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
});