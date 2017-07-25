//grab the text file. 
//pull the info from the text file
//run the command based on what is in the text file
	//need to split the data where there is a comma, so i can assign each part to a different function

var fs = require('fs');
var myCommands = require("../liri.js");

var myRandom = function(cb){
	fs.readFile("random.txt", "utf8", function(err, data){
		
		if (err) throw err;
		var randomData = data.split(",");
		var command = randomData[0];
		var songOrMovie = randomData[1];

		cb(command, songOrMovie);

	});
};

module.exports = myRandom