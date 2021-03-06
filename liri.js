var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var Keys = require('./keys.js');

var myTwitter = require("./apps/twitter.js")(Keys.twitterKeys);//getting just the twitter keys from the keys.js file
var mySpotify = require("./apps/spotify.js")(Keys.spotifyKeys);
var myOmdb = require("./apps/omdb.js")(Keys.omdbKeys);
var myRandom = require("./apps/random.js");

var command = (process.argv[2]);
var songOrMovie = (process.argv[3]);


 function myCommands(currentCommand, input){
	switch (currentCommand){
		case "my-tweets": //need to see a break or return statement outside of every case to stop it
				myTwitter.tweets(function(myTweets){ //calling the function "tweets" from the twitter.js file and passing it the function "myTweets"
				console.log(myTweets);
			});
		break;

		case "spotify-this-song": {
				mySpotify.spotify(input, function(mySpotify){ 
					for(var item in mySpotify.tracks.items){//log artist name, song, album, preview link from spotify
						console.log("The name of this track is: ", mySpotify.tracks.items[item].name);
						console.log("The name of the artist is: ", mySpotify.tracks.items[item].artists[0].name);
						console.log("The name of the album is: ", mySpotify.tracks.items[item].album.name);
						console.log("The url to preview the song is: ", mySpotify.tracks.items[item].href);
					}
				});
			}
		break;

		case "movie-this":
			myOmdb.omdb(function(myOmdb){
				
			});
		break;

		case "do-what-it-says":
			myRandom(function(command, songOrMovie) {
				console.log("Running do what it says")
				myCommands(command, songOrMovie)
			});
		break;
		default: //need a default case in case something doesn't match
		return;
	};
};

myCommands(command, songOrMovie);
module.exports = myCommands;



