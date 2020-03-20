// associar as dependências instaladas
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");





// inicializar app express
const app = express();

// app.use(bodyParser.urlencoded({ extended:true}));
// app.use(bodyParser.json());

// ‘END POINT INVÁLIDO!’
app.get("/", function(req, res) {
  res.send("END POINT INVÁLIDO!");
});

// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


//Mongoose
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/vistoria-db").then(() => {
    console.log("Conenctado ao Mongo")
}).catch((err) => {
    console.log("Erro ao conectar ao MongoDB" + err)

})

// // Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
// mongoose.connect("mongodb+srv://test:nnn@nodejscluster-art2k.mongodb.net/test?retryWrites=true");
// // Confirma ligação na console
// mongoose.connection.on("connected", function () {
//   console.log("Connected to Database "+ test);
// });
// // Mensagem de Erro
// mongoose.connection.on("error", (err) => {
//   console.log("Database error " + err);
// });

// todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
const routes = require("./routes/api");
app.use("/api", routes);

let port = 3000;
// servidor á escuta no porto 3000
// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () => {
  console.log("Servidor em execução no porto: " + port);
});

