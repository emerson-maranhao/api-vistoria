const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Survey Schema

const ResponseSchema = new Schema({

  license_plate: {type: String, required: [true, "*Campo obrigatório!"]},
  brand: { type: String, required: [true, "*Campo obrigatório!"] },
  status: { type: String, required: [true, "*Campo obrigatório!"] },
  data_insert: { type: String, required: [true, "*Campo obrigatório!"] }

  // TODO: geo location
}); // criar Modelo_PI baseado em PISchema: ‘PontosInteresse’->nome da // coleção
const Response = mongoose.model("Response", ResponseSchema); // exportar Modelo_PI
module.exports = Response;
