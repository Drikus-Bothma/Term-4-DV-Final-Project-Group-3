$(document).ready(function(){

  
  function displayWatchlist() 
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

});
