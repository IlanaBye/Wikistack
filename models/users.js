const { Sequelize } = require('sequelize');
const db = require('./index');

const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
    }
  });

  module.exports = { db, User };