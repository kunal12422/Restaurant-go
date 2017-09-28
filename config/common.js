
var app_config = require('./app_config.json');
var node_env = process.env.NODE_ENV || 'development';


exports.getAppConfig = function() {
	return app_config[node_env];
}