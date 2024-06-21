const { Client } = require("pg");

const client = new Client({ // Configuração da conexão com o banco de dados
  user: "postgres",
  host: "localhost",
  database: "teste_db",
  password: "12345",
  port: 5432,
});

client.connect() // Estabelece a conexão
  .then(() => {
    console.log("Conectado ao banco de dados");
    const createTableQuery = `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
    )`;
    return client.query(createTableQuery); // Executa a query para criar a tabela users
  })
  .then(() => {
    const insertUserQuery = `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *
    `;
    const values = ["João da Silva", "joaodasilva@gmail.com"]
    return client.query(insertUserQuery, values) // Executa a query para adicionar um nome e email a tabela users
  })
  .then(res => {
    console.log('Usuário inserido com sucesso:', res.rows[0]); // Feedback para saber se a operação ocorreu corretamente
  })
  .catch(err => console.error("Erro ao executar operações: ", err)) // Tratamento de erros
  .finally(() => {
    client.end(); // Fecha a conexão
  });
