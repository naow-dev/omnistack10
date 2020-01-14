const express = require('express');
//Importando a biblioteca
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://alex:alex1234@cluster0-kcrut.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json()); // json tem que vir antes das Rotas. Para entender como vai ser lido
app.use(routes);


app.listen(3333);