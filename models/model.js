const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Survey Schema
const SurveySchema = new Schema({

  license_plate: {type: String, required: [true, "*Campo obrigatório!"]},
  year: {type: String, required: [true, "*Campo obrigatório!"]},
  brand: { type: String, required: [true, "*Campo obrigatório!"] },
  type: { type: String, required: [true, "*Campo obrigatório!"] },
  color: { type: String, required: [true, "*Campo obrigatório!"] },
  kind: { type: String, required: [true, "*Campo obrigatório!"] },
  uf: { type: String, required: [true, "*Campo obrigatório!"] },
  chassis: { type: String, required: [true, "*Campo obrigatório!"] },
  engine: { type: String, required: [true, "*Campo obrigatório!"] },

  chassis_photo: { type: String, required: [false] },
  chassis_obs: { type: String, required: [false] },
  engine_photo: { type: String, required: [false] },
  engine_obs: { type: String, required: [false] },
  back_photo: { type: String, required: [false] },
  back_obs: { type: String, required: [false] },
  odometer_photo: { type: String, required: [false] },
  odometer_obs: { type: String, required: [false] },

  survey_place: { type: String, required: [true, "*Campo obrigatório!"] },
  status: { type: String, required: [true, "*Campo obrigatório!"] },
  data_insert: { type: String, required: [true, "*Campo obrigatório!"] }

  // TODO: geo location
}); // criar Modelo_PI baseado em PISchema: ‘PontosInteresse’->nome da // coleção
const Survey = mongoose.model("Surveys", SurveySchema); // exportar Modelo_PI
module.exports = Survey;
