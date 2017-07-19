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
			for(var item in mySpotify.tracks.items){//log artist name, song, album, preview link from spotify
				console.log("The name of this track is: ", mySpotify.tracks.items[item].name);
				console.log("The name of the artist is: ", mySpotify.tracks.items[item].artists[0].name);
				console.log("The name of the album is: ", mySpotify.tracks.items[item].album.name);
				console.log("The url to preview the song is: ", mySpotify.tracks.items[item].href);
			}
		});
	}
	break;
	default: //need a default case in case something doesn't match
	return;
};



