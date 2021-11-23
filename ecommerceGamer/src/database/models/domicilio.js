'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Domicilio.hasOne(models.usuario,);
    }
  };
  Domicilio.init({
    domicilioid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    calle: DataTypes.STRING,
    numero: DataTypes.STRING,
    codigo_postal: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Domicilio',
  });
  return Domicilio;
};