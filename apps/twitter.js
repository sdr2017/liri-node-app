
var Twitter = require("twitter");

var myTwitter = function(keys){
	var that;
	console.log("that is logged");
var client = new Twitter(keys);
	console.log("new twitter keys is logged");

function tweets(cb) {
		var params = {screen_name: 'allTheGOT'};
		client.get("statuses/user_timeline", params, function (error, tweets, response) {
			if (error) throw (error);
			console.log("this is working!");
		//map is a function that injects individ element as well as where the index in which it's located
		//taking array of returned tweets, mapping them to go through individually, showing which index they're in, and exracting text
		var ourTweets = tweets.map(function(tweetInfo, index){
			return tweetInfo.text;
		})
		cb(ourTweets);
		});

	};

	that = {};
	//not invoked right away
	//property called tweets equal to tweets function
	that.tweets = tweets;
	console.log("new property added to that object", that);
	return that;
};

module.exports = myTwitter