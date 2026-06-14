import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoFoto({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        Tirar Foto 📸
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  texto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});