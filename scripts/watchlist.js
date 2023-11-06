$(document).ready(function(){

  // Function to display movies from MyWatchlist
  function displayWatchlist() {
    // Get the watchlist array from localStorage
    const watchlist = JSON.parse(localStorage.getItem('MyWatchlist')) || [];

    // Loop through each movie in the watchlist
    watchlist.forEach(movie => {
      // Create a container div for each movie
      const movieContainer = $('<div>').addClass('watchlist-movie');

      // Display title and release date
      const titleElement = $('<h3>').text(movie.title);
      const releaseDateElement = $('<p>').text('Release Date: ' + movie.release_date);

      // Create "Watch Now" button with a link to the individual page
      const watchNowButton = $('<button>')
        .text('Watch Now')
        .on('click', function () {
          // Redirect to individual page with the movie's ID in the URL
          window.location.href = 'individual.html?id=' + movie.id;
        });

      // Create "Remove" button to remove the movie from the watchlist
      const removeButton = $('<button>')
        .text('Remove')
        .on('click', function () {
          // Find the index of the movie in the watchlist array
          const index = watchlist.findIndex(watchlistMovie => watchlistMovie.id === movie.id);

          // Remove the movie from the array
          if (index !== -1) {
            watchlist.splice(index, 1);

            // Update localStorage with the modified watchlist array
            localStorage.setItem('MyWatchlist', JSON.stringify(watchlist));

            // Reload the page
            location.reload();
          }
        });

      // Append elements to the movie container
      movieContainer.append(titleElement, releaseDateElement, watchNowButton, removeButton);

      // Append the movie container to the watchlist container
      $('#watchlist-container').append(movieContainer);
    });
  }

  displayWatchlist();

});