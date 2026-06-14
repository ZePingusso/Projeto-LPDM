import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function BotaoCadastro({
  onPress
}) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        Cadastrar Aluno
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});