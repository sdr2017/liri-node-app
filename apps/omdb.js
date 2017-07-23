var request = require('request');
var Keys = require("../keys.js");

var myOmdb = function(keys) {
	var that;
	var client = Keys.omdbKeys;

	function omdb(cb) { 
		var songOrMovie = (process.argv[3]);
		var song = songOrMovie || "Mr. Nobody";
		var queryURL = "http://www.omdbapi.com/?t=" + song + "&y=&plot=short&apikey=" + client + "&tomatoes=true";

		request(queryURL, function (error, response, body) {

			var bodyInfo = JSON.parse(body);
			
			console.log("Movie title: ", bodyInfo.Title);
			console.log("IMDB Rating: ", bodyInfo.imdbRating);
			console.log("Country Produced: ", bodyInfo.Country);
			console.log("Language: ", bodyInfo.Language);
			console.log("Plot: ", bodyInfo.Plot);
			console.log("Actors: ", bodyInfo.Actors);
			console.log("Rotten Tomatoes URL ", bodyInfo.tomatoURL);

		});
};

 // * Title of the movie.
 //   * Year the movie came out.
 //   * IMDB Rating of the movie.
 //   * Country where the movie was produced.
 //   * Language of the movie.
 //   * Plot of the movie.
 //   * Actors in the movie.
 //   * Rotten Tomatoes URL.

	that = {};
	that.omdb = function(cb){omdb(cb);};
	return that;
};

module.exports = myOmdb;