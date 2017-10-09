'use strict';
module.exports = (sequelize, DataTypes) => {
  var restreview = sequelize.define('restreview', {
    review: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return restreview;
};