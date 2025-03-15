const { Router } = require("express");
const Tarefas = require("./models/Tarefas");

const router = Router();

router.post("/", async (req, res) => {
  const { titulo, status, prioridade, descricao } = req.body;
  const tarefas = await Tarefas.create({
    titulo,
    status,
    prioridade,
    descricao,
  });
  res.json({ tarefas });
});

module.exports = router;
