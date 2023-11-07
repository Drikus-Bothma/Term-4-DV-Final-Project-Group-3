

 
  
  $(document).ready(function() {
    console.log("Hello");
    
    var acc = document.getElementsByClassName("accordion");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
  
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  
    var acc = document.getElementsByClassName("accordion");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  
    let movie = [];
  
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=256a35c109969ca8fc077726003b1ca4&language=en-US&page=1";
  
   $.ajax({
      url: API_URL,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
  
        movie = data.results;
        console.log(movie)
        displayMovies(movie);
  
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  

document.addEventListener('DOMContentLoaded', function() {
  alert("Welcome To Globe Streaming, (User)!");
});

const moviesContainer = $('#moviesContainer');

function displayMovies(movie) {
  console.log('Displaying movies:', movie);
  $.each(movie, function(index, movie) {

    var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
    var moviePosterPath = movie.poster_path;
    let imageSrc = posterBaseUrl + moviePosterPath;
    const card = $(`
    <div class="col-md-2 md-3">
    <div class="card">
      <img src="${imageSrc}" class="card-img-top" alt="${movie.name}">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
      </div>
    </div>
  </div>
    `);

    card.click(function() {
      window.location.href = `individual.html?id=${movie.id}`;
    });

    moviesContainer.append(card);
  });
}
});
