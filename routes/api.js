const express = require ("express");
const router = express.Router();// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require("../controllers/apiController");// url do teste será: http://localhost:5000/api/teste

// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);

// TODO: listar pontos de interesse da BD
router.get("/details",apiController.details);

router.get("/response",apiController.detailsResponse);


// TODO: adicionar novo ponto de interesse
router.post("/survey",apiController.add);

router.post("/response",apiController.addResponse);


// TODO: atualizar ponto de interesse
router.put("/interest/:id",apiController.update);

// TODO: apagar ponto de interesse
router.delete("/interest/:id",apiController.delete);module.exports = router;

router.get("/teste", apiController.test);
module.exports = router;