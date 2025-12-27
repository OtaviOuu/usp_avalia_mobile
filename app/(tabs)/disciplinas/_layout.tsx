import { Stack } from "expo-router";

export default function DisciplinaLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Disciplinas" }} />
      <Stack.Screen
        name="[codigo]"
        options={({ route }) => ({
          title: `Disciplina ${route.params?.codigo}`,
        })}
      />
    </Stack>
  );
}
