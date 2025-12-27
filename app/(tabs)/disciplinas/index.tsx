import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Disciplina } from "../../../types/types";

export default function Index() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    getDisciplinas();
  }, []);

  async function getDisciplinas() {
    try {
      const response = await fetch(
        "https://usp-avalia.onrender.com/api/disciplinas"
      );
      const data = await response.json();
      setDisciplinas(data.data);
    } catch (error) {
      console.error("Error fetching disciplinas:", error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={disciplinas}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <Link
            href={`/disciplinas/${item.codigo}`}
            style={{ textDecorationLine: "none" }}
          >
            <View
              style={{
                marginBottom: 10,
                padding: 10,
                width: "100%",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
              <Text>Código: {item.codigo}</Text>
              <Text>Instituto: {item.instituto}</Text>
            </View>
          </Link>
        )}
      />
    </View>
  );
}
