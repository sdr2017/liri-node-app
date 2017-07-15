var Twitter = require('twitter');
var Keys = require("./keys.js");
console.log(Keys);

var client = new Twitter(Keys.twitterKeys);

var command = (process.argv[2]);

if (command === 'my-tweets') {
	tweets();	

};

// else if (command === 'spotify-this-song') {

// };

// else if (command === 'movie-this') {

// };

// else if (command === 'do-what-it-says') {

// };

	function tweets() {
		client.get("favorites/list", function (error, tweets, response) {
			if (error) throw (error);
			console.log("this is working!");
		console.log(tweets);
		console.log(response);
		});
	};