var request = require('request');
var Keys = require("../keys.js");

var myOmdb = function(keys) {
	var that;
	var client = Keys.omdbKeys;

	function omdb(cb) { 
		var songOrMovie = (process.argv[3]);
		var song = songOrMovie || "Mr. Nobody";
		var queryURL = "http://www.omdbapi.com/?t=" + song + "&y=&plot=short&apikey=" + client;

		request(queryURL, function (error, response, body) {
		  console.log('body:', body); // Print the HTML 
		});
};

	that = {};
	that.omdb = function(cb){omdb(cb);};
	return that;
};

module.exports = myOmdb;