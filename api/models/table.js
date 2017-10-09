'use strict';
module.exports = (sequelize, DataTypes) => {
  var table = sequelize.define('table', {
    capacity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       table.hasMany(models.booking); //tableId on booking
      }
    }
  });
  return table;
};