'use strict'
	
module.exports = function(App){
	
	App = require('node-app/load')(App);
	var AppMuninClient = new Class({
		Extends: App,
		
		load: function(wrk_dir, options){
			options = options || {};
			
			var get_options = function(options){
				options.scheme = options.scheme || this.options.scheme;
				//options.url = options.url || this.options.url;
				//options.port = options.port || this.options.port;
				//options.authentication = options.authentication || this.options.authentication;
				//options.jar = options.jar || this.options.jar;
				//options.gzip = options.gzip || this.options.gzip;
				
				//options.cradle = options.cradle || this.options.cradle;
				options.host = options.host || this.options.host;
				options.port = options.port || this.options.port;
				
				/**
				 * subapps will re-use main app logger
				 * */
				
				if(this.logger)	
					options.logs = this.logger;
				
				////console.log(this.request);
				
				//if(this.request)
					//options.cradle = this.request;
				//options.cradle = null;
				
				return options;
			
			}.bind(this);
			
			this.parent(wrk_dir, get_options(options));
			
			
		}
	})
	
	

	return AppMuninClient
}

