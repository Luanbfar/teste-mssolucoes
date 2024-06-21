const express = require("express"); // Importa o express
const app = express(); // Cria uma instância do express

const port = 3000;
const host = "localhost"

app.get("/helloworld", (req, res) => { // Método get no endpoint /helloworld
    res.status(200).json({ message: "Hello from express" }) // Envia a resposta com status code 200 e a mensagem em formato JSON
})

app.listen(port, () => { // Método para iniciar o servidor na porta 3000
    console.log(`Servidor rodando em http://${host}:${port}`)
})
