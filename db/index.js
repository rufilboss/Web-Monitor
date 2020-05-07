const Sequelize = require("sequelize");

// We create a url variable
let dbUrl = null;

// If NODE_ENV equals 'test' we will use the cloud test database
if (process.env.NODE_ENV === "test") dbUrl = process.env.dbUrl;
else {
  // If not we will use our production database
  dbUrl = "postgres://yusuf:123456@localhost:5432/yusuf";
}
// We initialize with our database url variable
const sequelize = new Sequelize(dbUrl, {
  host: "localhost",
  dialect: "postgres",
  // I shut off logging because it's annoying
  logging: false,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
