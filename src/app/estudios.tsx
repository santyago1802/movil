import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Formación Académica</Text>

      <TarjetaEstudio
        titulo="Bachiller"
        institucion="Institución Educativa Municipal"
        anio={2015}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico"
        institucion="Colegio ABC"
        anio={2018}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en ADSO"
        institucion="SENA"
        anio={2026}
        enCurso={true}
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