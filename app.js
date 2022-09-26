const express = require('express');
const app = express();

app.use((req,res,next) => {
    res.status(200).send({
        mensagem:"OK deu certo, BLZ testando pull"
    });
});

module.exports = app;
