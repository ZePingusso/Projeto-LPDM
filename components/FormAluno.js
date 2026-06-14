import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function FormAluno({
  nome,
  setNome,
  idade,
  setIdade,
  serie,
  setSerie,
  turma,
  setTurma,
}) {
  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Série"
        value={serie}
        onChangeText={setSerie}
      />
      <TextInput
        style={styles.input}
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
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
    borderWidth: 1,
    borderColor: '#cbd5e1',

    borderRadius: 12,

    paddingVertical: 12,
    paddingHorizontal: 15,

    marginBottom: 12,

    fontSize: 16,
    color: '#1e293b',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,

    elevation: 2,
  },
});