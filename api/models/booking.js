'use strict';
module.exports = (sequelize, DataTypes) => {
  var booking = sequelize.define('booking', {
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    day: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return booking;
};