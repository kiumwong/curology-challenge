module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ccNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fulfilled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Order;
};
