import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Estabelece a conexão com o banco de dados utilizando a função conectarAoBanco e a string de conexão obtida do ambiente.

export async function getTodosPosts() {
    // Função assíncrona para buscar todos os posts do banco de dados.
    const db = conexao.db("imersao-alura-nodejs");
    // Seleciona o banco de dados "imersao-alura-nodejs".
    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa a consulta e retorna um array com todos os documentos da coleção.
  }

  export async function criarPost(novoPost) {
    const db = conexao.db("imersao-alura-nodejs");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
  }