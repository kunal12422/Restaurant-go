'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return restaurant;
};