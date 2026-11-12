import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Experiencia Laboral y Proyectos</Text>

      <TarjetaExperiencia
        cargo="Desarrollador Full Stack Junior"
        empresa="Proyecto Stockia (SENA)"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de inventarios, gestión de base de datos relacionales y no relacionales, y pruebas automatizadas."
      />

      <TarjetaExperiencia
        cargo="Creador de App Móvil Educativa"
        empresa="Entorno Expo Go y React Native"
        periodo="2026"
        descripcion="Construcción de interfaces interactivas con navegación por pestañas y componentes reutilizables dinámicos."
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