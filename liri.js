//require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

//concert-this
//spotify-this-song
// movie-this
// do-what-it-says

var runThisProgram = process.argv[2];

if (runThisProgram === "concert-this") {
    concertThis();
} else if (runThisProgram === "spotify-this-song") {
    spotifyThisSong();
} else if (runThisProgram === "movie-this") {
    movieThis();
} else if (runThisProgram === "do-what-it-says") {
    doWhatItSays();
} else {
    console.log("What are you asking?  I don't understand.");
};


function concertThis() {
    console.log("This is a concert.");
};

function spotifyThisSong() {
    console.log("This is a song.");
};

function movieThis() {
    console.log("This is a movie.");
};

function doWhatItSays() {
    console.log("This is what it says.");
};