$(document).ready(function(){


  function displayWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('MyWatchlist')) || [];

    watchlist.forEach(movie => {
      const movieContainer = $('<div>').addClass('watchlist-movie');

      const titleElement = $('<h3>').text(movie.title);
      const releaseDateElement = $('<p>').text('Release Date: ' + movie.release_date);

      const watchNowButton = $('<button>')
        .text('Watch Now')
        .on('click', function () {
          window.location.href = 'individual.html?id=' + movie.id;
        });

      const removeButton = $('<button>')
        .text('Remove')
        .on('click', function () {
          const index = watchlist.findIndex(watchlistMovie => watchlistMovie.id === movie.id);

          if (index !== -1) {
            watchlist.splice(index, 1);

            localStorage.setItem('MyWatchlist', JSON.stringify(watchlist));

            location.reload();
          }
        });

      movieContainer.append(titleElement, releaseDateElement, watchNowButton, removeButton);

      $('#watchlist-container').append(movieContainer);
    });
  }

  displayWatchlist();

=======
    $(".a").click(function(){
      $("tr").remove(".remove1");
    });
  });
  
  $(document).ready(function(){
    $(".b").click(function(){
      $("tr").remove(".remove2");
    });
  });
  
  $(document).ready(function(){
    $(".c").click(function(){
      $("tr").remove(".remove3");
    });
  });

  $(document).ready(function(){
    $(".d").click(function(){
      $("tr").remove(".remove4");
    });
  });

  $(document).ready(function(){
    $(".e").click(function(){
      $("tr").remove(".remove5");
    });
  });

  $(document).ready(function(){
    $(".f").click(function(){
      $("tr").remove(".remove6");
    });
  });

  $(document).ready(function(){
    $(".g").click(function(){
      $("tr").remove(".remove7");
    });
  });

  $(document).ready(function(){
    $(".h").click(function(){
      $("tr").remove(".remove8");
    });
  });

  $(document).ready(function(){
    $(".i").click(function(){
      $("tr").remove(".remove9");
    });
  });

  function removeAll() {
    var table = document.getElementById("tab");
    var rowsToRemove = table.querySelectorAll("tr[value='remove']");

    rowsToRemove.forEach(function(row) {
        row.remove();
    });
}

var removeAllButton = document.querySelector(".j");
removeAllButton.addEventListener("click", removeAll);


var removeButtons = document.querySelectorAll(".a, .b, .c, .d, .e, .f, .g, .h, .i");
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
      var row = button.closest("tr");
      row.remove();

  });


const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=93a6dc3e';

$.ajax({
  url: apiUrl,
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    if (data.Response === 'True') {
      // Map the results to a JavaScript object
      const movies = data.Search.map(movie => ({
        id: movie.imdbID,
        name: movie.Title,
        image: movie.Poster,
      }));

      displayMovies(movies);
    } else {
      console.error('Error:', data.Error);
    }
  },
  error: function(error) {
    console.error('Error:', error);
  }
});

const moviesContainer = $('#moviesContainer');

function displayMovies(movies) {
  $.each(movies, function(index, movie) {
    const card = $(`
      <div class="col-md-2 md-3">
        <div class="card">
          <img src="${movie.image}" class="card-img-top" alt="${movie.name}">
          <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
          </div>
        </div>
      </div>
    `);

    // Add a click event to navigate to a new page with the movie ID in the URL
    card.click(function() {
      window.location.href = `movie.html?id=${movie.id}`;
    });

    moviesContainer.append(card);
  });
}

});
