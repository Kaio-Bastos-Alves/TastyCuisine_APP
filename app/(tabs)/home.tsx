import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '../themeContext'; // Importação do useTheme

const FEATURED_DISHES = [
  {
    id: '1',
    name: 'Panqueca de banana',
    chef: 'Chef Carlos',
    image: 'https://th.bing.com/th/id/OIP.lxtrvfRDySFiXtqY5m7EYgHaFD?w=233&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Uma deliciosa panqueca de banana, perfeita para um café da manhã saudável e energético.',
    ingredients: ['2 bananas maduras', '2 ovos', '1/2 xícara de aveia', 'Canela a gosto'],
    steps: ['Amasse bem as bananas em uma tigela.', 'Adicione os ovos e a aveia, misturando até ficar homogêneo.', 'Aqueça uma frigideira antiaderente e despeje pequenas porções.', 'Doure dos dois lados e sirva com mel.'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: '2',
    name: 'Bolo de Limão',
    chef: 'Chef Gabriel',
    image: 'https://th.bing.com/th/id/OIP.8XEg31oUEArxCoj9-BQxCAHaEK?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Um bolo cítrico e refrescante, ideal para qualquer ocasião, com um toque especial de limão.',
    ingredients: ['3 ovos', '2 xícaras de açúcar', '3 xícaras de farinha', 'Suco de 2 limões', '1 colher de fermento'],
    steps: ['Bata os ovos com o açúcar até dobrar de volume.', 'Adicione o suco de limão e a farinha peneirada aos poucos.', 'Por fim, misture o fermento delicadamente.', 'Asse em forno pré-aquecido a 180°C por 40 minutos.'],
    videoUrl: ''
  },
  
  {
    id: '3',
    name: 'Bolo de Cenoura com calda de chocolate',
    chef: 'Chef Lucas',
    image: 'https://th.bing.com/th/id/OIP.ykvAWmcHAKz3ytqFziDn-gHaE8?w=249&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Um bolo delicioso e úmido, com o sabor característico da cenoura e uma cobertura saborosa de calda de chocolate.',
    ingredients: ['Massa', '2 cenouras médias, cortadas em cubos médios (250 g)',
      '1/2 xícara (chá) de óleo',
      '3 ovos',
      '1/2 xícara (chá) de amido de milho MAIZENA',
      '1 e 1/2 xícara (chá) de farinha de trigo',
      '1 colher (sopa) de fermento em pó',
      '1 xícara (chá) de açúcar',
      'Cobertura',
      '1/2 xícara (chá) de chocolate ao leite derretido (ainda quente)',
      '1/2 xícara (chá) de creme de leite',
],
      steps: [
        'Pre aqueça o forno em temperatura média (180°C).',
        'Unte e enfarinhe uma forma de furo central média (20 cm de diâmetro).',
        'Reserve.',
        'No copo do liquidificador, coloque a cenoura, o óleo e os ovos, e bata até ficar homogêneo.',
        'Em uma tigela, peneire o amido de milho MAIZENA®, a farinha de trigo, o fermento e o açúcar, junte a mistura de cenoura reservada, e mexa com o auxílio de uma espátula até que vire uma massa uniforme.',
        'Disponha a massa na forma reservada e leve ao forno por 35 minutos, ou até que um palito, depois de espetado na massa, saia limpo.',
        'Retire do forno e deixe amornar.',
        'Cobertura',
        'Misture o chocolate e o creme de leite, espalhe por toda a superfície do bolo e sirva a seguir.',
        'Dica:',
        'Se preferir, utilize a forma redonda canelada (18 cm de diâmetro)' ]
  },
];

export default function HomeScreen() {
  const { theme } = useTheme(); // Usando o hook para acessar o tema

  // Definindo os estilos DENTRO do componente para que eles reajam ao tema
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background.primary, padding: 20, paddingTop: 50 },
    header: { marginBottom: 20 },
    greeting: { fontSize: 24, fontWeight: 'bold', color: theme.primary },
    subtitle: { fontSize: 16, color: theme.text.secondary },
    searchBar: {
      backgroundColor: theme.background.secondary,
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 50,
      justifyContent: 'center',
      marginBottom: 25,
      borderWidth: 1,
      borderColor: theme.background.secondary === '#FFFFFF' ? '#EEE' : '#333' // Exemplo de ajuste de borda
    },
    searchInput: { color: theme.text.primary, fontSize: 16 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', color: theme.text.primary, marginBottom: 15 },
    dishCard: {
      width: 200,
      backgroundColor: theme.background.secondary,
      borderRadius: 15,
      marginRight: 15,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.background.secondary === '#FFFFFF' ? '#EEE' : '#333' // Exemplo de ajuste de borda
    },
    dishImage: { width: '100%', height: 120 },
    dishInfo: { padding: 12 },
    dishName: { fontSize: 16, fontWeight: 'bold', color: theme.text.primary },
    dishChef: { fontSize: 12, color: theme.text.secondary, marginVertical: 4 },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Gourmet!</Text>
        <Text style={styles.subtitle}>O que vamos saborear hoje?</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Buscar pratos ou chefs..."
          placeholderTextColor={theme.text.secondary} // Usando cor do tema para placeholder
          style={styles.searchInput}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Destaques da Semana</Text>
        <FlatList
          data={FEATURED_DISHES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/dish/[id]",
                params: {
                  id: item.id,
                  name: item.name,
                  chef: item.chef,
                  image: item.image,
                  description: item.description,
                  ingredients: JSON.stringify(item.ingredients),
                  steps: JSON.stringify(item.steps),
                  videoUrl: item.videoUrl
                }
              }}
              asChild
            >
              <TouchableOpacity style={styles.dishCard}>
                <Image source={{ uri: item.image }} style={styles.dishImage} />
                <View style={styles.dishInfo}>
                  <Text style={styles.dishName}>{item.name}</Text>
                  <Text style={styles.dishChef}>{item.chef}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          )}
        />
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Categorias Populares</Text>
      </ScrollView>
    </View>
  );
}