const Sequelize = require("sequelize");

const connection = require("../database/database");

const Categoria = require('./Categoria');

const Produto = connection.define(
  'tbl_produto', 
  {
    codigo_produto: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_produto: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    valor_produto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem_produto: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    imagem_url:{
      type: Sequelize.STRING,
      allowNull: false
  },
    descricao_produto: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  
  Categoria.hasMany(Produto, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});

Produto.belongsTo(Categoria, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});

Produto.sync({force:false});
  
module.exports = Produto;