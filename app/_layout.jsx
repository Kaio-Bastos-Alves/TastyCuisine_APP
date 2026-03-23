import { Stack } from 'expo-router';
import { ThemeProvider } from './themeContext'; // Importação do seu arquivo de contexto

export default function RootLayout() {
  return (
    <ThemeProvider> {/* O ThemeProvider deve envolver todo o seu aplicativo */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="dish/[id]" />
      </Stack>
    </ThemeProvider>
  );
}