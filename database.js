import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('safeDrive.db');

export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      foto TEXT,
      nome TEXT NOT NULL,
      idade INTEGER NOT NULL,
      serie TEXT NOT NULL,
      turma TEXT NOT NULL
);
  `);
}

export function insertAluno(aluno) {
db.runSync(
  `INSERT INTO alunos
  (foto, nome, idade, serie, turma)
  VALUES (?, ?, ?, ?, ?)`,
  [
    aluno.foto,
    aluno.nome,
    aluno.idade,
    aluno.serie,
    aluno.turma
  ]
);
}

export function getAlunos(setter) {
  const result = db.getAllSync(
    `SELECT * FROM alunos ORDER BY rowid DESC`
  );

  setter(result);
}

export function updateAluno(aluno) {
  db.runSync(
    `UPDATE alunos
     SET foto = ?,
         nome = ?,
         idade = ?,
         serie = ?,
         turma = ?
     WHERE id = ?`,
    [
      aluno.foto,
      aluno.nome,
      aluno.idade,
      aluno.serie,
      aluno.turma,
      aluno.id
    ]
  );
}

export function deleteAluno(id) {
  db.runSync(
    `DELETE FROM alunos WHERE id = ?`,
    [id]
  );
}