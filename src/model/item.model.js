module.exports = (sequelize, DataTypes, Model) => {
  class Items extends Model {}

  Items.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "items",
    }
  );

  return Items;
};
