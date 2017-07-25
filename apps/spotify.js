var Spotify = require('node-spotify-api');

var mySpotify = function(keys){
	var that;
	var client = new Spotify(keys);

	function spotify(songOrMovie, cb) { 

		var song = songOrMovie || "Ace of Base, The Sign";
		client.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
			cb(data);
			});		
	};

	that = {};
	that.spotify = function(input, cb){spotify(input, cb);};
	return that;
	
};

module.exports = mySpotify;