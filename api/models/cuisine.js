'use strict';
module.exports = (sequelize, DataTypes) => {
  var cuisine = sequelize.define('cuisine', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      cuisine.belongsToMany(models.restaurant,{ 
        through:{model:ResturantCuisine}
      });
      }
    }
  });
  return cuisine;
};