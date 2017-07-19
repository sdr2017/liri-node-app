var Twitter = require("twitter");

var myTwitter = function(keys){
	var that;
	var client = new Twitter(keys);

	function tweets(cb) { //cb is the function "myTweets" we passed from the liri.js file
		debugger;
		var params = {screen_name: 'allTheGOT'}; //setting params to my screen name
		
		client.get("statuses/user_timeline", params, function (error, tweets, response) { 	//getting the tweets from my username
			if (error) throw (error);
				//map is a function that injects individual element as well as the index in which it's located in the array
				//taking array of returned tweets, mapping them to go through individually, showing which index they're in, and exracting text
			var ourTweets = tweets.map(function(tweetInfo, index){
				return tweetInfo.text; //.text includes the actual tweet
			})
			cb(ourTweets);
		});
	};

	that = {};
		//not invoked right away
		//property called tweets equal to tweets function
	that.tweets = tweets;
	return that;
};

module.exports = myTwitter