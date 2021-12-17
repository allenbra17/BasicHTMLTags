
const baseURL = "https://imdb-api.com/API/AdvancedSearch";
const APIKey = "k_d0n70ap7";
let resultsElement = document.getElementById('results');
let buttonElement = document.getElementById('pickMovies');
let formElement = document.getElementById('movie-search');


function movieData(title, poster, rating) {
    //Clear previous results
    // resultsElement.innerHTML = '';
    let movieTitle = document.createElement('p');
    let moviePoster = document.createElement('p');
    let imDbRating = document.createElement('p');

    movieTitle.innerText = movie;
    moviePoster.innerText = poster;
    imDbRating.innerText = rating;

    resultsElement.appendChild(movieTitle);
    resultsElement.appendChild(moviePoster);
    resultsElement.appendChild(imdbRating);
}

function pickMovies(title, poster, rating) {
    let url =`${ baseURL }/${ APIKey }?release_date${ startDate },${ endDate }&genres=${ genre }`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        let movie = jsonData.results.title;
        let poster = jsonData.results.image;
        let rating = jsonData.results.imDbrating;

        movieData(movieTitle, moviePoster, imdbRating);
    })
}
function fetchMovie() {
    function getUserInput() {
            let startDate = new FormData(start);
            let endDate = new FormData(end);
            let genre = new FormData(genre);
            pickMovies(title, poster, rating);
    }
}

// buttonElement.addEventListener('submit', () => {
//     console.log(startDate,endDate, genre)
// })