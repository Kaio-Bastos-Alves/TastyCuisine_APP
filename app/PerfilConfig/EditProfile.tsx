'use client';

import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import LGContainer from '../../src/components/LGContainer';

const AnimatedLGContainer = Animated.createAnimatedComponent(LGContainer);



export default function LoginScreen() {
  const router = useRouter();

  const fillLevel = useSharedValue(0.34);

  useEffect(() => {
    fillLevel.value = withRepeat(
      withTiming(0.34, { 
        duration: 2500, 
        easing: Easing.inOut(Easing.sin) 
      }), -1, true);}, []);

  const animatedProps = useAnimatedProps(() => {
    return {
      fillLevel: fillLevel.value,
    };
  });

  return (
    <AnimatedLGContainer 
      liquidColor="#ff6924" 
      animatedProps={animatedProps}
    >
      <Image source={require('../../assets/images/3.png')} style={styles.logo} />
      
      <Text style={styles.title}>Login</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
      />
      
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </AnimatedLGContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    //marginBottom: 20,
    //borderRadius: 77,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 20,
    color: '#FFF',
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  button: {
    width: '80%',
    height: 55,
    marginTop: 10,
    backgroundColor: '#38110aff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  link: {
    marginTop: 20,
    color: '#FFF',
    textDecorationLine: 'underline',
    fontSize: 16
  },
});