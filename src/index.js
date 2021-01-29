const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Teste Teste Teste'});
})
app.listen(3333);
