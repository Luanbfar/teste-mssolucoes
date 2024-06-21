const http = require("http"); // Importa o pacote http para criar um servidor

const port = 3000;
const host = "localhost"

const server = http.createServer((req, res) => { // Cria um servidor
    res.statusCode = 200; // Atribui o status code 200 que indica su-cesso
    res.setHeader("Content-type", "text/plain") // Garante que o con-teúdo do body seja interpretado como texto
    res.end("Hello World!") // Fechamento da resposta adicionando a mensagem como parâmetro para o método end()
})

server.listen(port, host, () => { // Método para rodar o servidor na porta e hostname armazenados nas variáveis
    console.log(`Servidor rodando em http://${host}:${port}`)
})
