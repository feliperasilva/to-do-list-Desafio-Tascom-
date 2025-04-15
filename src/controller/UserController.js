const Tarefas = require("../models/Tarefas");

module.exports = {
  async createTarefas(req, res) {
    try {
      const { titulo, status, prioridade, descricao } = req.body;
      const tarefas = await Tarefas.create({
        titulo,
        status,
        prioridade,
        descricao,
      });
      res.status(200).json({ tarefas });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateTarefas(req, res) {
    try {
      const { id } = req.params;
      const { titulo, status, prioridade, descricao } = req.body;

      const tarefa = await Tarefas.findOne({ where: { id } });

      if (!tarefa) {
        res.status(401).json({ message: "Nenhuma tarefa encontrada" });
      } else {
        const tarefa = await Tarefas.update(
          { titulo, status, prioridade, descricao },
          { where: { id } }
        );
        res.status(200).json({ tarefa });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async listTarefas(req, res) {
    try {
      const tarefa = await Tarefas.findAll();
      res.status(200).json({ tarefa });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async deleteTarefas(req, res) {
    const { id } = req.params;

    const tarefa = await Tarefas.findOne({ where: { id } });
    if (!tarefa) {
      res.status(401).json({ message: "Tarefa não encontrada" });
    } else {
      await Tarefas.destroy({ where: { id } });
      res.status(200).json({ ok: true });
    }
  },
};
