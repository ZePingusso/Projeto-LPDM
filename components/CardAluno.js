import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function CardAluno({ item, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>Nome: {item.nome}</Text>
         {item.foto && (
        <Image
          source={{ uri: item.foto }}
          style={styles.foto}
        />
      )}
      <Text style={styles.informacao}>📌Idade: {item.idade}</Text>
      <Text style={styles.informacao}>📚Série: {item.serie}</Text>
      <Text style={styles.informacao}>🏫Turma: {item.turma}</Text>

      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.botaoExcluir}>
        <Text style={styles.textoBotao}>🗑️ Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

foto: {
  width: 100,
  height: 100,
  borderRadius: 12,
  alignSelf: 'center',
  marginBottom: 10,
  borderWidth: 2,
},

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },

  informacao: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 4,
  },

  botaoExcluir: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 12,
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});