var request = require('request');
var Keys = require("../keys.js");

var myOmdb = function(keys) {
	var that;
	var client = Keys.omdbKeys;

	function omdb(cb) { 
		var songOrMovie = (process.argv[3]);
		var queryURL = "http://www.omdbapi.com/?t=" + songOrMovie + "&y=&plot=short&apikey=" + client;

		request(queryURL, function (error, response, body) {
		  //console.log('error:', error); // Print the error if one occurred 
		  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		  console.log('body:', body); // Print the HTML 
		});
};

	that = {};
	that.omdb = function(cb){omdb(cb);};
	return that;
	console.log(that);
};

module.exports = myOmdb;