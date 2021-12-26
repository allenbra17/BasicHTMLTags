
const baseURL = "https://imdb-api.com/API/AdvancedSearch";
const APIKey = "k_d0n70ap7";
let url;

let resultsElement = document.getElementById('results');
let buttonElement = document.getElementById('button');
let formElement = document.getElementById('genreSearch');

function displayResults(poster, movie, rating) {
    // Clear previous results
    // resultsElement.innerHTML = '';
    let moviePoster = document.createElement('p');
    let movieTitle = document.createElement('p');
    let imDbRating = document.createElement('p');

    movieTitle.innerText = movie;
    moviePoster.innerText = poster;
    imDbRating.innerText = rating;

    resultsElement.appendChild(movieTitle);
    resultsElement.appendChild(moviePoster);
    resultsElement.appendChild(imDbRating);
}

function fetchResults(e) {
    e.preventDefault();
    url =`${ baseURL.value }/${ APIKey }&genres=${ genres.value }`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
        // return results.json();
    .then(jsonData => {
        console.log(json.results);

        let movie = jsonData.results.title;
        let poster = jsonData.results.image;
        let rating = jsonData.results.imDbrating;

        displayResults(poster, movie, rating);


        movieData(movie, poster, rating);
    })
}


// buttonElement.addEventListener('submit', () => {
//     console.log(startDate,endDate, genre)
    
//     pickMovies(startDate, endDate, genre)
// })