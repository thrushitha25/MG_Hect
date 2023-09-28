'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class signUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  signUp.init({
    uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  password: {
    type:DataTypes.STRING,
    allowNull: false
  },
  re_enterpassword: {
    type:DataTypes.STRING,
  },
  },{
    sequelize,
    modelName: 'signUp',
    underscored: true,
  });
  return signUp;
};