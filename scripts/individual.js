// I cant get this to work

function addToWatchlist(movie) {
  
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

 
  watchlist.push(movie);

 
  localStorage.setItem('watchlist', JSON.stringify(watchlist));

  alert('Movie added to your watchlist!');
}


const addToWatchlistButton = document.getElementById('addToWatchlist');


addToWatchlistButton.addEventListener('click', function() {
  
  const movieData = JSON.parse(this.getAttribute('data-movie'));
  
 
  addToWatchlist(movieData);
});
