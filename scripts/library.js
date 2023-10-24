// function getMovieDetails(movie_id) {
//     const apiUrl = `https://api.themoviedb.org/3/movie/{movie_id}`;
  
//     $.ajax({
//       url: apiUrl,
//       method: 'GET',
//       dataType: 'json',
//       success: function(data) {
//         const movie = data.movies[0];

//         console.log(movie);
        
//         if (movie) {
//           $('#movieTitle').text(movie.strMovie);
//           $('#movieDetails').text(movie.strMovieDetails);

//         } else {
//           // Handle the case where the cocktail is not found
//         }
//       },
//       error: function(error) {
//         console.error('Error:', error);
//       }
//     });
//   }

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
    const card = $(
      <div class="col-md-2 md-3">
        <div class="card">
          <img src="${movie.image}" class="card-img-top" alt="${movie.name}"></img>
          <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
          </div>
        </div>
      </div>
    );

    // Add a click event to navigate to a new page with the movie ID in the URL
    card.click(function() {
      window.location.href = movie.html?id=${movie.id};
    });

    moviesContainer.append(card);
  });
}