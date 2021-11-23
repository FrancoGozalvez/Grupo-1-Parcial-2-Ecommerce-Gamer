'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Usuario.belongsTo(models.domicilio)
      Usuario.hasMany(models.factura)

    }
  };
  Usuario.init({
    usuarioid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    usuario: DataTypes.STRING,
    domicilioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};