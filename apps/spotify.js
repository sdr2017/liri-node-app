var Spotify = require('node-spotify-api');
	console.log("Test2");

var mySpotify = function(keys){
	console.log("Test1");
	var that;
	var client = new Spotify(keys);

	function spotify(cb) { 
		var songOrMovie = (process.argv[3]); 

		client.search({ type: 'track', query: songOrMovie, limit: 1 }, function(err, data) {
			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
			cb(data);
			});		
	};

	that = {};
	that.spotify = function(cb){spotify(cb);};
	return that;
	
};

module.exports = mySpotify;