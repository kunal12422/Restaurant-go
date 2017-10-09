'use strict';
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        location.hasMany(models.restaurant);//locationId on resturant
      }
    }
  });
  return location;
};