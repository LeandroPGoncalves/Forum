'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perguntas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perguntas.init({
    Id: DataTypes.STRING,
    Pergunta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perguntas',
  });
  return Perguntas;
};