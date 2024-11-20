import getTodosPosts from "../model/postsModel.js";

export async function listarPosts(req, res){
    const posts = await getTodosPosts();
    // Chama a função para buscar os posts e armazena o resultado.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
}