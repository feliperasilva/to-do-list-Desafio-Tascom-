const { Router } = require("express");
const UserController = require("./controller/UserController");
const router = Router();

router.post("/tarefas-create", UserController.createTarefas);
router.put("/tarefas-update/:id", UserController.updateTarefas);
router.get("/tarefas-list", UserController.listTarefas);
router.delete("/tarefas-delete/:id", UserController.deleteTarefas);

module.exports = router;
