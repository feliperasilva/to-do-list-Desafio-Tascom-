const Tarefas = require("../models/Tarefas");

module.exports = {
  async createTarefas(req, res) {
    const { titulo, status, prioridade, descricao } = req.body;
    const tarefas = await Tarefas.create({
      titulo,
      status,
      prioridade,
      descricao,
    });
    res.json({ tarefas });
  },
};
