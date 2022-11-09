module.exports = (sequelize, DataTypes, Model) => {

  class Todos extends Model { }

  Todos.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    createdate: {
      type: DataTypes.DATE
    },
    createdby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updateddate: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'todos'
  });

  return Todos;
}
