const { DataTypes } = require("sequelize");
const sequelize = require("../services/db");

/**
 * 用户模型
 * @author Jeffrey
 */
const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    six: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    hobby: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    age: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "user",
    paranoid: true,
    deletedAt: "isDelete",
    timestamps: false,
  }
);

module.exports = UserModel;
