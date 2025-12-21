import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ShowDisciplinaScreen() {
  const disciplinaCodigo = useLocalSearchParams<{ codigo: string }>().codigo;

  return (
    <View>
      <Text>Show Disciplina {disciplinaCodigo}</Text>
    </View>
  );
}
