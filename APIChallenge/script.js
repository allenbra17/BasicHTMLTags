const baseURL = "https://imdb-api.com/API/AdvancedSearch";
const APIKey = "k_d0n70ap7?";
let resultsElement = document.getElementById('results');
let buttonElement = document.getElementById('pickMovies');
let tableElement = document.getElementById('genreSearch');


buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    fetchResults();
    return false;
})

 function movieData(movie, poster, rating) {
     let newTable = document.createElement('table');
     let titleHead = document.createElement('th');
     let rateHead = document.createElement('th');
     let movieTitle = document.createElement('td');
     let imDbRating = document.createElement('td');
     let moviePoster = document.createElement('img');

     newTable.innerText = "";
     titleHead.innerText = "Movie Title";
     rateHead.innerText = "User Rating"

     movieTitle.innerText = movie;
     moviePoster.src = poster;
     imDbRating.innerText = rating;

     resultsElement.appendChild(movieTitle);
     resultsElement.appendChild(imDbRating);
     resultsElement.appendChild(moviePoster);
 }

//  function toggle(checkAll) {
//     var boxes = document.querySelectorAll('input[type="checkbox"]');
//     for (var i = 0; i < boxes.length; i++) {
//         if (boxes[i] != checkAll)
//             boxes[i].checked = checkAll.checked;
//     }
// }

function getChecked() {
    let genres = [];
        let genreSearch = document.getElementById("genreSearch");
        let checks = genreSearch.getElementsByTagName("input");
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                genres.push(checks[i].value);
            }
        };

        return genres;
    } 

function fetchResults() {
    // let startDate = document.querySelector('.startDate').value;
    // let endDate = document.querySelector('.endDate').value;

    let url = new URL(baseURL + '/' + APIKey);
//    url.searchParams.set('release_date', startDate + ',' + endDate);
    url.searchParams.set( 'title_type', "feature")
    url.searchParams.set('genres', getChecked())
    url.searchParams.set('groups', "bottom_1000")
    url.searchParams.set('count', '100' )
    url.searchParams.set('sort', 'user_rating,asc')
    
    let decoded = decodeURIComponent(url)
    alert(decoded)
    fetch(decoded)
    
    .then(function(response) { return response.json(); })
    .then(function(json) {
        console.log(json.results);
        resultsElement.innerHTML = '';
        json.results.forEach( (res) => {
           let movie = res.title;
           let rating = res.imDbRating;
           let poster = res.image;
           movieData(movie, poster, rating);
        })
});

function makeTable() {
    let genres = [];
        let genreSearch = document.getElementById("genreSearch");
        let checks = genreSearch.getElementsByTagName("input");
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                genres.push(checks[i].value);
            }
        };

        return genres;
    } 


}
