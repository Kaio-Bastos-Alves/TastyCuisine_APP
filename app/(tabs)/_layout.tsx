'use client';

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#d10e0eff', // Seu vermelho personalizado
          borderTopColor: '#690202ff', 
          height: 65,
          paddingBottom: 10,
          paddingTop: 5
        },
        tabBarActiveTintColor: '#F8D775', 
        tabBarInactiveTintColor: '#FFF', // Branco para melhor contraste no vermelho
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Início',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{ 
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="post" 
        options={{ 
          title: 'Postar',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={32} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}
