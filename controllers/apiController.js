const Survey = require("../models/model");
const Response = require("../models/response");
var fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

exports.test = function(req, res) {
  res.send("Olá! Teste ao Controller");
};
// TODO: listar pontos de interesse da BD
exports.details =function (req, res) {
    Survey.find({}).then(function(survey){
    res.send(survey);
    });

}; 
exports.detailsResponse =function (req, res) {
  Response.find({}).then(function(response){
  res.send(response);
  });
}

//   fs.readFile("responses.json", "utf8", function(err, data){
//     if (err) {
//       var response = {status: "falha", resultado: err};
//       res.json(response);
//     } else {
//       var obj = JSON.parse(data);
//       var result = "Nenhum usuário foi encontrado";
  
//       obj.aprovadas.forEach(function(aprovada) {
//         if (aprovada != null) {
//           if (aprovada.vistoria_id != req.query.vistoria_id) {
//             result = aprovada;
//           }
//         }
//       });
  
//       var response = {status: "sucesso", resultado: result};
//       res.json(response);
//     }
//   });

// }; 
// fs.readFile("usuarios.json", "utf8", function(err, data){
//   if (err) {
//     var response = {status: "falha", resultado: err};
//     res.json(response);
//   } else {
//     var obj = JSON.parse(data);
//     var result = "Nenhum usuário foi encontrado";

//     obj.usuarios.forEach(function(usuario) {
//       if (usuario != null) {
//         if (usuario) {
          
//           if (usuario.usuario_id != req.query.usuario_id) {
//             result = usuario;
//           }
          
//         }
//       }
//     });

//     var response = {status: "sucesso", resultado: result};
//     res.json(response);
//   }
// });
// };


// TODO: adicionar nova vistoria
exports.add = function(req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  Survey.create(req.body).then((survey) => {
    res.send(survey);
  
    });
};

// TODO: adicionar nova vistoria
exports.addResponse = function(req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  Response.create(req.body).then((response) => {
    res.send(response);
  });
};

// TODO: atualizar nova vistoria
exports.update = function(req, res) {
  res.send({ type: "PUT" });
};

// TODO: apagar vistoria
exports.delete = function(req, res) {
  res.send({ type: "DELETE" });
};

//   // adicionar novo ponto de interesse

// exports.create = function(req, res) {
//   console.log("You made a POST request: ", req.body);
//   res.send({
//     type: "POST",
//     name: req.body.name,
//     rank: req.body.rank
//   });
// };
