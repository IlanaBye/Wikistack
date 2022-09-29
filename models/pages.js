const { Sequelize } = require('sequelize');
const db = require('./index');



const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false, 
      unique: true
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  module.exports = { db, Page };
