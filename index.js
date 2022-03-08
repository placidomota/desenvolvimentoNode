const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá mundo com express!')
})

app.listen(port, () => {
    console.log(`Servidor exemplo rodando na porta ${port}!`)
});