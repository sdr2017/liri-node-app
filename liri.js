var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Keys = require("./keys.js");
//console.log(Keys);

var myTwitter = require("./apps/twitter.js")(Keys.twitterKeys);//getting just the twitter keys from the keys.js file
var mySpotify = require("./apps/spotify.js")(Keys.spotifyKeys);

var command = (process.argv[2]);
var songOrMovie = (process.argv[3]);

switch (command){
	case "my-tweets": { //need to see a break or return statement outside of every case to stop it
		myTwitter.tweets(function(myTweets){ //calling the function "tweets" from the twitter.js file and passing it the function "myTweets"
			console.log(myTweets);
		});
	}
	break;

	case "spotify-this-song": { 
		mySpotify.spotify(function(mySpotify){ 
			console.log("SPOTIFY DATA",mySpotify);
			for(var item in mySpotify.tracks.items)
			{
				console.log(mySpotify.tracks.items[item].album);
			}
		});
	}
	break;
	default: //need a default case in case something doesn't match
	return;
};
debugger;



