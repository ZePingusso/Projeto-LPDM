import React from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default function PesquisaAluno({
  pesquisa,
  setPesquisa
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar aluno..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  input: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,

    fontSize: 16,
    color: '#1e293b',

    borderWidth: 1,
    borderColor: '#cbd5e1',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

});