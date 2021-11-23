'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puntodeventa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puntodeventa.hasMany(models.factura)
    }
  };
  Puntodeventa.init({
    domicilio: DataTypes.STRING,
    cuit: DataTypes.STRING,
    ingresos_brutos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Puntodeventa',
  });
  return Puntodeventa;
};