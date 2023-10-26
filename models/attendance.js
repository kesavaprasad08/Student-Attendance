const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const StudentReport = sequelize.define("StudentReport", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Date:Sequelize.STRING,
  Siva: Sequelize.STRING,
  Rajesh:Sequelize.STRING,
  Ashok:Sequelize.STRING,
  Sai:Sequelize.STRING,
  Haritha:Sequelize.STRING,
  Ram:Sequelize.STRING,
  Krishna:Sequelize.STRING,
  Anu:Sequelize.STRING,
  Ammu:Sequelize.STRING,
  Adi:Sequelize.STRING,
  Venkat:Sequelize.STRING
});

module.exports = StudentReport;