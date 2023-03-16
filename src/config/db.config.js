const { Sequelize, Model, DataTypes } = require("sequelize");
const item_model = require("../model/item.model");

const connect = () => {
  const sequelize = new Sequelize(process.env.DB_ADDR, {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    retry: {
      max: 10,
      match: [Sequelize.ConnectionError, Sequelize.ConnectionRefusedError],
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.items = item_model(sequelize, DataTypes, Model);
  return db;
};

module.exports = {
  connect,
};
