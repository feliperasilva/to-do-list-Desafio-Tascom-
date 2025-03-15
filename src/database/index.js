const Sequelize = require("sequelize");
const configDB = require("../config/database");

const Tarefas = require("../models/Tarefas");

const connection = new Sequelize(configDB);

Tarefas.init(connection);

module.exports = connection;
