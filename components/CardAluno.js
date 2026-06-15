import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import FormAluno from './components/FormAluno';
import BotaoFoto from './components/BotaoFoto';
import ListaAlunos from './components/ListaAlunos';
import PesquisaAluno from './components/PesquisarAluno';
import BotaoCadastro from './components/BotaoCadastro';
import {
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  View,
} from 'react-native';
import {
  initDB,
  insertAluno,
  deleteAluno,
  updateAluno,
  getAlunos,
} from './database';

export default function App() {
const [alunos, setAlunos] = useState([]);
const [nome, setNome] = useState('');
const [idade, setIdade] = useState('');
const [serie, setSerie] = useState('');
const [turma, setTurma] = useState('');
const [foto, setFoto] = useState(null);
const [pesquisa, setPesquisa] = useState('');
const [alunoEditando, setAlunoEditando] = useState(null);

  
useEffect(() => {
  initDB();
  getAlunos(setAlunos);
}, []);

function cadastrarAluno() {

  if (alunoEditando) {

    updateAluno({
      id: alunoEditando.id,
      foto,
      nome,
      idade,
      serie,
      turma,
    });

    Alert.alert('Aluno atualizado!');
    setAlunoEditando(null);

  } else {

    insertAluno({
      foto,
      nome,
      idade,
      serie,
      turma,
    });

    Alert.alert('Aluno cadastrado!');
  }

  getAlunos(setAlunos);

  setNome('');
  setIdade('');
  setSerie('');
  setTurma('');
  setFoto(null);
}

function editarAluno(aluno) {
  setAlunoEditando(aluno);

  setNome(aluno.nome);
  setIdade(aluno.idade.toString());
  setSerie(aluno.serie);
  setTurma(aluno.turma);
  setFoto(aluno.foto);
}

function excluirAluno(id) {
  Alert.alert(
    'Excluir aluno',
    'Tem certeza que deseja excluir?',
    [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        onPress: () => {
          deleteAluno(id);
          getAlunos(setAlunos);
        }
      }
    ]
  );
}
async function tirarFoto() {
  const permissao =
    await ImagePicker.requestCameraPermissionsAsync();

  if (!permissao.granted) {
    Alert.alert('Permissão da câmera negada');
    return;
  }

  const resultado = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (!resultado.canceled) {
    setFoto(resultado.assets[0].uri);
  }
}
const alunosFiltrados = alunos.filter((aluno) =>
  aluno.nome.toLowerCase().includes(
    pesquisa.toLowerCase()
  )
);
  return (
<ScrollView style={styles.container}>
  <Text style={styles.titulo}>
    Cadastro de Alunos 🎓
  </Text>

<FormAluno
  nome={nome}
  setNome={setNome}
  idade={idade}
  setIdade={setIdade}
  serie={serie}
  setSerie={setSerie}
  turma={turma}
  setTurma={setTurma}
/>
<BotaoFoto onPress={tirarFoto} />
{foto && (
  <View style={styles.fotoContainer}>
    <Image
      source={{ uri: foto }}
      style={styles.fotoPreview}
    />
  </View>
)}
<BotaoCadastro
  texto={
    alunoEditando
      ? 'Salvar Alterações'
      : 'Cadastrar Aluno'
  }
  onPress={cadastrarAluno}
/>
<PesquisaAluno
  pesquisa={pesquisa}
  setPesquisa={setPesquisa}
/>
<ListaAlunos
  alunos={alunosFiltrados}
  onDelete={excluirAluno}
  onEdit={editarAluno}
/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 20,
  },

  fotoContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },

  fotoPreview: {
    width: 160,
    height: 160,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#2563eb',
  },
});