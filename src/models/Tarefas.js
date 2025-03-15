const { Model, DataTypes } = require("sequelize");

class Tarefas extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        status: DataTypes.ENUM("Em andamento", "Finalizado"),
        prioridade: DataTypes.INTEGER,
        descricao: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Tarefas;
