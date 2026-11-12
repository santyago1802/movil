import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  titulo: string;
  detalle: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ titulo, detalle, nombreIcono, onPress }: Props) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Ionicons name={nombreIcono} size={28} color="#2563eb" style={estilos.icono} />
      <View style={estilos.textoContenedor}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.detalle}>{detalle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 1,
  },
  icono: {
    marginRight: 16,
  },
  textoContenedor: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  detalle: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
});