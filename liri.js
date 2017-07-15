var Twitter = require('twitter');
var twitterKeys = require("./keys.js");
console.log(twitterKeys);

var client = new Twitter({
  consumer_key: 'l08m2dfKZkeVAYcO3Njstddda',
  consumer_secret: 'aVHG3imi6hDHVxadaF4X8MkcbSg7OZIVGN8EX1TWcI2v0XgJz7',
  access_token_key: '884916712113668096-ycrynFYhrFToxVNH0NTLCeZRzIoL6h0',
  access_token_secret: 'lnbxqB4gBmndCukdwCOiIrqOTyZpzzLksLO7c8r203kmo'
});

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
		client.get("favorites/list", function (err, data, response) {
		console.log(response);
		});
	};