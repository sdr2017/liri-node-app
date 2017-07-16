var Twitter = require('twitter');
var Keys = require("./keys.js");
//console.log(Keys);

var myTwitter = require("./apps/twitter.js")(Keys.twitterKeys);//getting just the twitter keys from the keys.js file

var command = (process.argv[2]);

switch (command){
	case "my-tweets": { //need to see a break or return statement outside of every case to stop it
		myTwitter.tweets(function(myTweets){ //calling the function "tweets" from the twitter.js file and passing it the function "myTweets"
			console.log(myTweets);
		});
	}
	break;
	default: //need a default case in case something doesn't match
	return;
};



