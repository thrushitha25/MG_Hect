const { Sequelize } = require('sequelize');
const process = require('dotenv').config();
const signUp=require("../src/models/signup")

const sequelize = new Sequelize(
    process.parsed.DATABASE_NAME,
    process.parsed.DATABASE_USER,
    process.parsed.DATABASE_PASSWORD, {
    host: process.parsed.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true,
      underscored: true,
    },
  }
);

sequelize.sync({ force: false }).then(() => {
    console.log("yes re-sync done");
});

const models={
    SignUp:signUp(sequelize, Sequelize.DataTypes)
}

module.exports={sequelize,models}