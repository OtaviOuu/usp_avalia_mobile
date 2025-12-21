import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="disciplinas" options={{ headerShown: false }} />
      <Tabs.Screen name="professores" options={{ headerShown: false }} />
    </Tabs>
  );
}
