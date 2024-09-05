const API_key = "42b1c4db";
const movie = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const searchMovie = async (movieName) => {
  let response = await fetch(`https://www.omdbapi.com/?apikey=${API_key}&t=${movieName}`);
  let data = await response.json();
  console.log(data);

  // Clear the card content before displaying new movie data or error
  const cardContainer = document.querySelector(".card");
  cardContainer.innerHTML = "";
  
  // Reset the input field
  movie.value = "";

  // Check if the movie is found
  if (data.Response === "False") {
    // Show an error message when no movie is found
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.innerHTML = `<p>Movie not found! Please try searching for a different movie.</p>`;
    cardContainer.appendChild(errorDiv);
  } else {
    // Create movie card content if the movie is found
    let div = document.createElement("div");
    div.classList.add("movie-card");
    div.innerHTML = `
    <div class="movie-image">
        <img class="image" src="${data.Poster}" alt="${data.Title}">
    </div>
    <div class="movie-details">
      <div class="cont-01">
        <h2 class="movie-title">${data.Title}</h2>
        <p class="movie-rating">Rating: ${data.imdbRating}</p>
        <p class="movie-genre">Genre: ${data.Genre}</p>
      </div>
      <div class="cont-02">
        <p class="movie-year">Year: ${data.Year}</p>
        <p class="movie-duration">Duration: ${Math.floor(parseInt(data.Runtime) / 60)}h ${parseInt(data.Runtime) % 60}min</p>
        <p class="movie-plot">Plot: ${data.Plot}</p>
      </div>
    </div> 
    `;
    cardContainer.appendChild(div);
  }
};

// Default search for a movie (e.g., Avengers)
searchMovie("Avengers");

// Trigger search on button click
searchBtn.addEventListener("click", () => {
  searchMovie(movie.value);
});
