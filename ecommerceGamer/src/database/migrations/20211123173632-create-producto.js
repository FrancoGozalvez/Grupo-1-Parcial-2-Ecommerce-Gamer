'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      prodimg: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id'
        }
      },
      marcaid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'marcas',
          key: 'id'
        }
      },
      detallefacturaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'detallefacturas',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};