import { Professor } from "@/types/types";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
export default function ShowProfessoresScreen() {
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    listProfessores();
  }, []);

  async function listProfessores() {
    const response = await fetch(
      "https://usp-avalia.onrender.com/api/professores"
    );
    const data = await response.json();
    setProfessores(data.data);
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={professores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              padding: 10,
              width: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Salario: {item.salario}</Text>
          </View>
        )}
      />
    </View>
  );
}
