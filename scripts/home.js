let userName;

const movieInformation = [
  {
    imdbId: "tt9603212",
  },
  {
    imdbId: "tt1517268",
  },
  {
    imdbId: "tt0080684",
  },
  {
    imdbId: "tt0087538",
  },
  {
    imdbId: "tt0096895",
  },
  {
    imdbId: "tt0096895",
  }
];
let showMovieInfo = [];
let sortMovies = [];
let getFilter = "allMovies";

$(document).ready(function () {
  getMovieInfo();
  $(window).on("load", function () {
    userName = JSON.parse(localStorage.getItem("Username"));
    showUserName();
  });
  
});
$(document).ajaxComplete(function () {
  sortMovieData();
  $(".movie-card").on("click", "#info-url", function () {
    window.location.href =
      "Individual-movie-page.html?id=" +
      $(this).closest("#movie-card-id").attr("value");
  });
});

getMovieInfo = () => {
  for (let i = 0; i < movieInformation.length; i++) {
    const movieInfo = movieInformation[i].imdbId;
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?i=" + movieInfo + "&apikey=d7afefce",
      success: function (data) {
        movie = data;
      },
    }).done(function () {
      moviePoster = movie.Poster;
      checkMovieData = JSON.stringify(movie);

      movieTitle = movie.Title;

      showMovieInfo.push({
        movieId: movieInfo,
        showMovieTitle: movieTitle,
        showMovieImage: moviePoster,
      });
      
    });
  }
  console.log(showMovieInfo)
};

setMovieData = (displayCards) => {
  $("#library-cards-container").empty();
  for (let i = 0; i < displayCards.length; i++) {
    $("#library-cards-container").append($("#library-card-temp").html());

    let currentCard = $("#library-cards-container").children().eq(i);
    currentCard.find("#movieTitle").text(displayCards[i].showMovieTitle);
    currentCard
      .find("#movie-image")
      .attr("src", displayCards[i].showMovieImage);
      currentCard.find("#movie-card-id").attr("value", displayCards[i].movieId);
      
  }
};