import React from 'react';
import { FlatList } from 'react-native';
import CardAluno from './CardAluno';

export default function ListaAlunos({
  alunos,
  onDelete,
}) {
  return (
    <FlatList
      data={alunos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardAluno
          item={item}
          onDelete={onDelete}
        />
      )}
    />
  );
}
