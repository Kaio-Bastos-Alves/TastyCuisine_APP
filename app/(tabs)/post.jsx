import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PostRecipeScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const router = useRouter();

  const handlePost = () => {
    // Aqui futuramente enviaremos para o banco de dados
    alert('Receita postada com sucesso!');
    router.replace('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Compartilhar Receita</Text>
        
        {/* Seleção de Imagem (Placeholder) */}
        <TouchableOpacity style={styles.imagePicker}>
          <Ionicons name="camera-outline" size={40} color="#F8D775" />
          <Text style={styles.imagePickerText}>Adicionar Foto do Prato</Text>
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Título da Receita</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Lasanha da Nonna" 
            placeholderTextColor="#666"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descrição Curta</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Conte um pouco sobre esse prato..." 
            placeholderTextColor="#666"
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ingredientes (um por linha)</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Ex: 500g de massa..." 
            placeholderTextColor="#666"
            multiline
            value={ingredients}
            onChangeText={setIngredients}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Modo de Preparo</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Passo 1: Cozinhe a massa..." 
            placeholderTextColor="#666"
            multiline
            value={steps}
            onChangeText={setSteps}
          />
        </View>

        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Publicar Receita</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, paddingTop: 40 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#F8D775', marginBottom: 25 },
  imagePicker: { 
    width: '100%', 
    height: 180, 
    backgroundColor: '#1E1E1E', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#333',
    borderStyle: 'dashed',
    marginBottom: 25
  },
  imagePickerText: { color: '#888', marginTop: 10, fontSize: 14 },
  inputGroup: { marginBottom: 20 },
  label: { color: '#F8D775', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  input: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 10, 
    padding: 15, 
    color: '#FFF', 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  textArea: { minHeight: 100, textAlignVertical: 'top' },
  postButton: { 
    backgroundColor: '#E74C3C', 
    height: 55, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40
  },
  postButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
