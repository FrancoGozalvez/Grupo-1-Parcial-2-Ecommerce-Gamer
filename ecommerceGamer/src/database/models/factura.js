'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Factura.belongsTo(models.usuarioId)
      Factura.belongsTo(models.puntodeventaId)
    }
  };
  Factura.init({
    fecha: DataTypes.STRING,
    tipo: DataTypes.STRING,
    total: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    puntodeventaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};