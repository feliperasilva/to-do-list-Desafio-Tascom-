"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("tarefas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Em andamento", "Finalizado"),
        allowNull: false,
      },
      prioridade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 10,
        },
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("tarefas");
  },
};
