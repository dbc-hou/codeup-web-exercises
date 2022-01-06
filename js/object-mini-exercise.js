/*
*** MINI EXERCISE 10 minutes ***
Declare an array of two objects for movies
    that have the following member values:
    title (string)
year released (int)
rating (string)
director (string)
imdb rating (decimal)
academy award win (boolean)
Use imdb.com to look up the info or make up your own info
write a printMovie function that takes a movie as a parameter and prints its info.
    call it with each of your array elements.
    write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements */
 /* *** Continuing MINI EXERCISE until lunch ***
Change the director member of your movies to an object
with firstName and lastName members
Make an array member for your movies called genres.
It is an array of string elements where each element
is one of your movies’ genres from imdb.com
and change your printMovie function
please cupdate as you complete this ungraded practice exercise */

let movies = [];
movies[0] = {
    title : "Stranded in the Salt Mine with Henrietta",
    yearReleased : 1989,
    rating : "R",
    director : {
        firstName: "BOB",
        lastName: "Dobbs"
    },
    IMDBRating : 5.5,
    oscarWinner : false,
    genres : ["Horror", "RomCom","Political Thriller"]
}
movies[1] = {
    title : "Shut Up, You Have No Idea What I've Been Through",
    yearReleased : 2015,
    rating : "PG13",
    director : {
        firstName: "Ida",
        lastName: "Noh"
    },
    IMDBRating: 6.4,
    oscarWinner : true,
    genres : ["Tragicomedy", "Avant Garde","Psychological Thriller","Your Mom Won\'t Like It"]
}
//console.log(movies[0].title);

function printMovies (someMovies){
    for (let i = 0;i < someMovies.length;i++) {
        console.log(someMovies[i].title + ", rated " + someMovies[i].rating + ", was released in " + someMovies[i].yearReleased + ".");
        console.log("It was directed by " + someMovies[i].director.firstName + " " + someMovies[i].director.lastName + ".");
        if (someMovies[i].oscarWinner) {
            console.log("It won at least one Oscar.")
        } else {
            console.log("It won no Academy Awards.")
        }
        console.log(`It has an IMDB average rating of ${someMovies[i].IMDBRating} out of 10.`)
        printGenres(someMovies[i]);
    }
}

function printGenres(thisMovie) {
    console.log("Genres: ");
    for (let j = 0;j < thisMovie.genres.length;j++) {
        console.log("\t" + thisMovie.genres[j]);
    }
    console.log("\n");
}
printMovies(movies);