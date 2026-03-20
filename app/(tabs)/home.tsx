import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const FEATURED_DISHES = [
  { id: '1', name: 'Panqueca de banana', chef: 'Chef Carlos', image: 'https://th.bing.com/th/id/OIP.lxtrvfRDySFiXtqY5m7EYgHaFD?w=233&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: '2', name: 'Bolo de Limão', chef: 'Chef Gabriel', image: 'https://th.bing.com/th/id/OIP.8XEg31oUEArxCoj9-BQxCAHaEK?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: '3', name: 'Caviar', chef: 'Chef Lucas', image: 'https://th.bing.com/th/id/OIP.ykvAWmcHAKz3ytqFziDn-gHaE8?w=249&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
];



export default function HomeScreen( ) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Gourmet!</Text>
        <Text style={styles.subtitle}>O que vamos saborear hoje?</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput 
          placeholder="Buscar pratos ou chefs..." 
          placeholderTextColor="#888" 
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
    /* O Link envolve o card e passa os dados do prato como parâmetros */
    <Link 
      href={{
        pathname: "/dish/[id]",
        params: { 
          id: item.id, 
          name: item.name, 
          chef: item.chef, 
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
        {/* Aqui você pode adicionar mais listas ou componentes conforme o Figma */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#F8D775' },
  subtitle: { fontSize: 16, color: '#AAA' },
  searchBar: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    height: 50, 
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#333'
  },
  searchInput: { color: '#FFF', fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 15 },
  dishCard: { 
    width: 200, 
    backgroundColor: '#1E1E1E', 
    borderRadius: 15, 
    marginRight: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333'
  },
  dishImage: { width: '100%', height: 120 },
  dishInfo: { padding: 12 },
  dishName: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
  dishChef: { fontSize: 12, color: '#AAA', marginVertical: 4 },
  dishPrice: { fontSize: 14, fontWeight: 'bold', color: '#E74C3C' },
});
