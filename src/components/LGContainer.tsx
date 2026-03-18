import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function LGContainer({ 
  children, 
  liquidColor = '#E74C3C', 
  fillLevel = 0.45 
}) {
  const waveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [waveAnim]);

  const translateX = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });

  return (
    <View style={styles.container}>
      {/* O "Copo" com efeito de vidro */}
      <BlurView intensity={60} tint="dark" style={styles.glassCard}>
        
        {/* Camada do Líquido no Fundo */}
        <View style={[styles.liquidContainer, { height: `${fillLevel * 100}%` }]}>
          <Animated.View style={[styles.waveWrapper, { transform: [{ translateX }] }]}>
            <Svg height="60" width={width * 2} viewBox={`0 0 ${width * 2} 60`}>
              <Path
                d={`M 0 30 Q ${width / 2} 0 ${width} 30 T ${width * 2} 30 V 60 H 0 Z`}
                fill={liquidColor}
                opacity={0.4}
              />
            </Svg>
          </Animated.View>
          <View style={[styles.liquidBase, { backgroundColor: liquidColor, opacity: 0.4 }]} />
        </View>

        {/* Conteúdo (Inputs, Botões, etc) */}
        <View style={styles.content}>
          {children}
        </View>

        {/* Borda do Vidro (Brilho) */}
        <View style={styles.glassBorder} />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212', // Fundo escuro para destacar o vidro
  },
  glassCard: {
    width: '100%',
    maxWidth: 400,
    minHeight: 550,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  liquidContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  waveWrapper: {
    position: 'absolute',
    top: -30,
    width: width * 2,
  },
  liquidBase: {
    flex: 1,
    marginTop: 25,
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    zIndex: 10,
  },
  glassBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    pointerEvents: 'none',
  },
});
