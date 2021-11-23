'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Producto.belongsToOne(models.marcaid)
     Producto.belongsTo(models.detallefacturaId)
    }
  };
  Producto.init({
    stock: DataTypes.STRING,
    desc: DataTypes.STRING,
    precio: DataTypes.STRING,
    nombre: DataTypes.STRING,
    prodimg: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    marcaid: DataTypes.INTEGER,
    detallefacturaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};