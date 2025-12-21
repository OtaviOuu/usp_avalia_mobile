import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
type Disciplina = {
  codigo: string;
  nome: string;
  instituto: string;
};

export default function Index() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    getDisciplinas();
  }, []);

  async function getDisciplinas() {
    try {
      const data = [
        { codigo: "MAT101", nome: "Matemática Básica", instituto: "ICMC" },
        { codigo: "FIS101", nome: "Física I", instituto: "ICMC" },
        { codigo: "QUI101", nome: "Química Geral", instituto: "IQSC" },
        { codigo: "BIO101", nome: "Biologia Celular", instituto: "IB" },
        { codigo: "HIS101", nome: "História Antiga", instituto: "FH" },
        { codigo: "LIT101", nome: "Literatura Brasileira", instituto: "FFLCH" },
        { codigo: "PSI101", nome: "Introdução à Psicologia", instituto: "FSP" },
        { codigo: "ECO101", nome: "Microeconomia", instituto: "FEA" },
        { codigo: "SOC101", nome: "Sociologia Geral", instituto: "FCS" },
        { codigo: "FIL101", nome: "Filosofia Antiga", instituto: "FFLCH" },
        { codigo: "ART101", nome: "História da Arte", instituto: "FA" },
        { codigo: "MUS101", nome: "Teoria Musical", instituto: "EMESP" },
        { codigo: "DAN101", nome: "Dança Contemporânea", instituto: "ECA" },
      ];
      setDisciplinas(data);
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
