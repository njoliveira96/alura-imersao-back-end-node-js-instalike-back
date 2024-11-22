import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o módulo Express para criar o servidor web
/* // Array de posts inicial (pode ser removido após a conexão com o banco de dados)
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x200"
    },
    {   
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://placeimg.com/300/200/animals"
    }
]; */
const app = express();
// Cria uma instância do Express para iniciar o servidor.
routes(app)
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.

/* function buscarPostPorId(id) {
  // Função para buscar um post pelo ID no array de posts (pode ser removida após a conexão com o banco de dados).
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  // Rota GET para buscar um post por ID.
  const index = buscarPostPorId(req.params.id);
  // Busca o índice do post no array.
  res.status(200).json(posts[index]);
  // Envia uma resposta HTTP com status 200 (OK) e o post encontrado.
}); */