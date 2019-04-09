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
    var artistname = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistname + "/events?app_id=codingbootcamp";

    var axios = require("axios");
    var moment = require('moment');
moment().format();

    axios.get(queryUrl).then(
        function(response) {
            console.log("Name of venue: " + response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.city);
            
            
            var str = response.data[0].datetime;
            var date = moment(str);
            var dateComponent = date.utc().format('MM-DD-YYYY');
            console.log("Date of Event: " + dateComponent);

        }
    )

    .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

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