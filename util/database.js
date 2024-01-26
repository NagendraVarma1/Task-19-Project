const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-db", "root", "Veera@512", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
