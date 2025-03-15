const { Model, DataTypes } = require("sequelize");

class Tarefas extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        status: DataTypes.ENUM("Em andamento", "Finalizado"),
        prioridade: {
          type: DataTypes.INTEGER,
          validate: {
            min: 1,
            max: 10,
          },
        },

        descricao: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Tarefas;
