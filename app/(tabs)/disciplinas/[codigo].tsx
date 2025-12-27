import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Disciplina } from "../../../types/types";

export default function ShowDisciplinaScreen({ navigation, route }: any) {
  const disciplinaCodigo = useLocalSearchParams<{ codigo: string }>().codigo;
  const [disciplina, setDisciplinas] = useState<Disciplina>();

  useEffect(() => {
    getDisciplina();
  }, []);

  async function getDisciplina() {
    try {
      const response = await fetch(
        `https://usp-avalia.onrender.com/api/disciplinas/${disciplinaCodigo}`
      );
      const data = await response.json();
      setDisciplinas(data.data);
    } catch (error) {
      console.error("Error fetching disciplinas:", error);
    }
  }

  return (
    <View>
      {disciplina ? (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
            Professores:
          </Text>
          {disciplina.professores.map((professor) => (
            <View
              key={professor.id}
              style={{
                marginTop: 5,
                padding: 10,
                backgroundColor: "#f0f0f0",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{professor.nome}</Text>
              <Text>Email: {professor.email}</Text>
              <Text>Salário: R$ {professor.salario.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
