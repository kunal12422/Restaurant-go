'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        restaurant.hasMany(models.table); //create resturantId on table
        restaurant.hasMany(models.restreview); //create resturantId on restreview
        restaurant.belongsToMany(models.cuisine,{ 
          through:{model:ResturantCuisine}
        });
      }
    }
  });
  return restaurant;
};