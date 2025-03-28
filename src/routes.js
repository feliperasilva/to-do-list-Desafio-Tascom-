const { Router } = require("express");
const UserController = require("./controller/UserController");
const router = Router();

router.post("/tarefas-create", UserController.createTarefas);

module.exports = router;
