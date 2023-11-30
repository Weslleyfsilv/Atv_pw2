const sequelize = require("sequelize");

const connection = require("../database");

const Produto = sequelize.define('Produto', {
    codigo_produto: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_produto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    valor_produto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    imagem_produto: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    descricao_produto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  
  Categoria.sync({force:false});
  
  module.exports = Produto;