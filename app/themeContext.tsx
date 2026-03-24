import { createContext, ReactNode, useContext, useState } from 'react';

// 1. Definição das Cores para cada Tema e Modo
// Tema "Delícia Roxa"
const lightPurpleTheme = {
  background: {
    primary: '#fce2e2',
    secondary: '#fcc3c3',
  },
  text: {
    primary: '#333333',
    secondary: '#888888',
  },
  primary: '#c24b4b',
  accent: '#c24b4b',
  button: '#df6161',
  error: '#DC3545',
};

const darkPurpleTheme = {
  background: {
    primary: '#1A1A1A',
    secondary: '#2C2C2C',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#AAAAAA',
  },
  primary: '#9370DB',
  accent: '#8A2BE2',
  button: '#9370DB',
  error: '#DC3545',
};

// Tema "Sabor Laranja"
const lightBlueTheme = {
  background: {
    primary: '#e2cfb9',
    secondary: '#ebc68e',
  },
  text: {
    primary: '#6d4005',
    secondary: '#7F8C8D',
  },
  primary: '#bd7e43',
  accent: '#bc701a',
  button: '#d66f1b',
  error: '#E74C3C',
};

const darkBlueTheme = {
  background: {
    primary: '#4b4339',
    secondary: '#463a2a',
  },
  text: {
    primary: '#eb8a0b',
    secondary: '#7F8C8D',
  },
  primary: '#d6965a',
  accent: '#bc701a',
  button: '#5a2f0c',
  error: '#E74C3C',
};

// Tema "Chef Moderno"
const lightModernTheme = {
  background: {
    primary: '#f3edb5',
    secondary: '#ebdb84',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
  primary: '#c2ac2e',
  accent: '#ac9204',
  button: '#959722',
  error: '#EF5350',
};

const darkModernTheme = {
  background: {
    primary: '#0A0A0A',
    secondary: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#BDBDBD',
  },
  primary: '#FF7F50',
  accent: '#FFEA00',
  button: '#FF7F50',
  error: '#EF5350',
};

// 2. Tipagem do Tema
type Theme = typeof lightPurpleTheme; // Todos os temas devem ter a mesma estrutura

// 3. Tipagem do Contexto
interface ThemeContextType {
  theme: Theme;
  currentThemeName: string; // Ex: 'purple', 'blue', 'modern'
  isDarkMode: boolean; // true para modo escuro, false para modo claro
  setTheme: (name: 'purple' | 'blue' | 'modern') => void;
  toggleDarkMode: () => void;
}

// 4. Criação do Contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 5. Provedor do Tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentThemeName, setCurrentThemeName] = useState<'purple' | 'blue' | 'modern'>('purple'); // Tema inicial
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Modo inicial: claro

  const getTheme = (name: 'purple' | 'blue' | 'modern', isDark: boolean): Theme => {
    switch (name) {
      case 'purple': return isDark ? darkPurpleTheme : lightPurpleTheme;
      case 'blue': return isDark ? darkBlueTheme : lightBlueTheme;
      case 'modern': return isDark ? darkModernTheme : lightModernTheme;
      default: return isDark ? darkPurpleTheme : lightPurpleTheme; // Fallback
    }
  };

  const theme = getTheme(currentThemeName, isDarkMode);

  const setTheme = (name: 'purple' | 'blue' | 'modern') => setCurrentThemeName(name);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, currentThemeName, isDarkMode, setTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 6. Hook Personalizado para Consumir o Tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};