
$(document).ready(function (){


  var urlParams = new URLSearchParams(window.location.search);
  var movieID = urlParams.get('id');


  $.ajax({
    type: "GET", 
    url: "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=256a35c109969ca8fc077726003b1ca4", // API URL & API KEY
    success: function (data) { 
        SingleMovie = data; 
        console.log(SingleMovie)
    },
    error: function () {
    }
  }).done(function () { 

    var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
    var moviePosterPath = SingleMovie.poster_path;
    $("#MovieCover").attr("src", posterBaseUrl + moviePosterPath);
  
    $("#movieTitle").text(SingleMovie.tagline);
    $("#title").text(SingleMovie.original_title);
    $("#about").text(SingleMovie.overview + "min");
    $("#status").html("<strong>Status: </strong>" + SingleMovie.status);
    $("#releaseDate").html("<strong>Date Released: </strong>" + SingleMovie.release_date);
    $("#runtime").html("<strong>Runtime: </strong>" + SingleMovie.runtime + " minutes");
    


function addToWatchlist(movieTitle, movieID, movieDate) {
  let watchlist = JSON.parse(localStorage.getItem('MyWatchlist')) || [];

  const existingMovie = watchlist.find(movie => movie.id === movieID);

  if (!existingMovie) {
    watchlist.push({ id: movieID, title: movieTitle, date: movieDate });

    localStorage.setItem('MyWatchlist', JSON.stringify(watchlist));

    alert('Movie added to watchlist!');
  } else {
    alert('Movie is already in your watchlist!');
  }
}



$('#addToWatchlist').on('click', function() {

  addToWatchlist(SingleMovie.original_title, movieID, SingleMovie.release_date);
  
});

  
  });





})













//

