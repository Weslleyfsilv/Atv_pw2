const sequelize = require("sequelize");

const connection = require("../database");

const Categoria = sequelize.define('Categoria', {
    codigo_categoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    observacoes_categoria: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  
  Categoria.sync({force:false});
  
  module.exports = Categoria;