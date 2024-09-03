const API_key = "42b1c4db";
const movie = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const searchMovie = async (movieName) => {
  let response = await fetch(`http://www.omdbapi.com/?apikey=${API_key}&t=${movieName}`);
  let data = await response.json();
  console.log(data);


  document.querySelector(".card") = "";
  searchInput.value="";

  let div = document.createElement("div");
  div.classList.add("movie-card");
  div.innerHTML = `
  <div class="movie-image">
      <img class="image" src="${data.Poster}">
    </div>
    <div class="movie-details">
      <div class="cont-01">
        <h2 class="movie-title">${data.Title}</h2>
        <p class="movie-rating">Rating: ${data.imdbRating}</p>
        <p class="movie-genre">${data.Genre}</p>
      </div>
      <div class="cont-02">
        <p class="movie-year">Year: ${data.Year}</p>
        <p class="movie-duration">Duration: (${data.Runtime}/60)h (${data.Runtime}%60)</p>
        <p class="movie-plot">Plot: ${data.Plot}</p>
      </div>
    </div> 

  `;
  document.querySelector(".card").appendChild(div)

}

searchMovie("avengers");

searchBtn.addEventListener("click", () => {
  searchMovie(movie.value);
});