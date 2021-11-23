'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detallefactura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detallefactura.hasOne(model.producto)
      Detallefactura.belongsTo(model.facturaId)
    }
  };
  Detallefactura.init({
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.STRING,
    total: DataTypes.STRING,
    facturaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detallefactura',
  });
  return Detallefactura;
};