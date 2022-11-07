const { Sequelize, Model, DataTypes } = require('sequelize');
const todo_model = require('../model/todo.model');

const connect = () => {
  const sequelize = new Sequelize(process.env.DB_ADDR, {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    retry: {
      max: 10,
      match: [
        Sequelize.ConnectionError,
        Sequelize.ConnectionRefusedError,
      ],
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.todos = todo_model(sequelize, DataTypes, Model);
  return db;
}

module.exports = {
  connect
}
