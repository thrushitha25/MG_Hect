const express = require("express");
const database = require("./config/database")
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const root = require("./src/routes/index");
const createError = require('http-errors')

const cors = require("cors");

const app = express();
const jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 3050 || process.env.PORT;


require("dotenv").config();
// app.use(cors(corsOptions));
async function init() {
    try {
      //mysql
      await database.sequelize.authenticate();
      console.log("Connected to Mysql!");
      //mondodb
      app.use(express.json({ limit: '100mb' }));
      app.use(express.urlencoded({ limit: '100mb', extended: true }));
      app.use(compression());
      app.use(helmet());
      app.use(bodyParser.json());
      //  app.use(busboyBodyParser());
      // app.use(cors(corsOptions));
      app.use("/data", root);
      app.use(async (req, res, next) => {
        next(createError.NotFound())
      })
  
      app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.send({
          error: {
            status: err.status || 500,
            message: err.message
          }
        })
      })
  
      app.listen(PORT, function () {
        console.log(`Server started on port ${PORT}`);
      });
  
    } catch (error) {
      console.log("Unable to connect to the database:", error);
    }
}
  
  init();